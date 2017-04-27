import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import { BehaviorSubject, Subject } from 'rxjs';

/**
 * Socket service to work with the stomp protocol
 *
 * Example how it use
 *
 * The first we need to connect to socket
 * const socketUrlChannel = '/some-url'
 * socketService.tryConnect({messages: [socketUrlChannel]}).then(onConnect)
 *
 * onConnect() {
 *  messages = socketService.messages;
 *  messageSub$ = socketService.messages;.subscribe(onNext);
 * }
 *
 * onNext(message) {
 *  do something
 * }
 */

export enum STOMPState {
    CLOSED,
    TRYING,
    CONNECTED,
    SUBSCRIBED,
    DISCONNECTING
}

@Injectable()
export class SocketService {

    public socketUrl: string;

    public state: BehaviorSubject<any>;

    // Publishes new messages to Observers
    public messages: Subject<Stomp.Message>;

    // Configuration structure with MQ creds
    private config: any = {};

    private options;

    // STOMP Client from stomp.js
    private client: Stomp.Client;

    // Resolve Promise made to calling class, when connected
    private resolvePromise: (...args: any[]) => void;

    // Timer
    private timer: any;

    constructor() {
        const host = (new URL(window.location.href)).host;
        // todo remove host
        // const host = `192.168.100.10:8581`;
        this.socketUrl = 'ws://' + host + '/stomp';

        this.messages = new Subject<Stomp.Message>();
        this.state = new BehaviorSubject<any>(STOMPState.CLOSED);
    }

    tryConnect(options?): Promise<{}> {
        this.options = options;

        this.configure(this.options);

        if (this.state.getValue() !== STOMPState.CLOSED) {
            this.state.next(STOMPState.CLOSED);
            // throw Error('Can\'t try_connect if not CLOSED!');
        }
        if (this.client === null) {
            throw Error('Client not configured!');
        }

        // Attempt connection, passing in a callback
        this.client.connect(
            '',
            '',
            this.onConnect,
            this.onError
        );

        console.log('Connecting...');
        this.state.next(STOMPState.TRYING);

        return new Promise(
            (resolve, reject) => this.resolvePromise = resolve
        );
    }

    configure({ messages = [], socketUrl = this.socketUrl, incoming = 0, outgoing = 20000 }) {
        this.client = Stomp.client(`${socketUrl}`);
        this.client.heartbeat.incoming = incoming;
        this.client.heartbeat.outgoing = outgoing;
        this.config.subscribe = messages;
    }

    public disconnect(): void {

        // Notify observers that we are disconnecting!
        this.state.next(STOMPState.DISCONNECTING);

        // Abort reconnecting if in progress
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }

        // Disconnect. Callback will set CLOSED state
        // this.client.disconnect(
        //     () => this.state.next(STOMPState.CLOSED)
        // );

        // Disconnect if connected. Callback will set CLOSED state
        if (this.client && this.client.connected) {
            console.log('Close connection');
            this.client.disconnect(
                () => this.state.next(STOMPState.CLOSED)
            );
        }
        console.log('>>>> DISCONNECT SOCKET');
    }

    public subscribe(): void {

        // Subscribe to our configured queues
        for (const t of this.config.subscribe) {
            this.client.subscribe(t, this.onMessage, { ack: 'auto' });
        }

        // Update the state
        if (this.config.subscribe.length > 0) {
            this.state.next(STOMPState.SUBSCRIBED);
        }
    }

    public onConnect = () => {
        console.log('Connected');
        // Indicate our connected state to observers
        this.state.next(STOMPState.CONNECTED);

        // Subscribe to message queues
        this.subscribe();

        // Resolve our Promise to the caller
        this.resolvePromise();

        // Clear callback
        this.resolvePromise = null;

        // Clear timer
        this.timer = null;
    }

    public onError = (error: string | Stomp.Message) => {

        if (typeof error === 'object') {
            error = (<Stomp.Message> error).body;
        }

        console.error(`Error: ${error}`);

        // Check for dropped connection and try reconnecting
        if (error.indexOf('Lost connection') !== -1) {

            // Reset state indicator
            this.state.next(STOMPState.CLOSED);

            // Attempt reconnection
            console.log('Reconnecting in 5 seconds...');
            // this.timer = setTimeout(() => {
            //     this.try_connect(this.options);
            // }, 5000);
        }
    }

    public onMessage = (message: Stomp.Message) => {

        if (message.body) {
            this.messages.next(message);
        } else {
            console.error('Empty message received!');
        }
    }
}