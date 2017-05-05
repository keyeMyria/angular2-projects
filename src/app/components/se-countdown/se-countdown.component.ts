import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeCountdownService } from './se-countdown.service';
import { ISeCountdownOptions } from './ISeCountdown';

const DEFAULT_OPTIONS_REACTIVE = {
    isStart: false,
    time: ''
};

@Component({
    selector : 'se-countdown',
    styles   : [require('./se-countdown.scss')],
    template : require('./se-countdown.html'),
    providers: []
})
export class SeCountdownComponent implements OnInit {

    @Input('options') options: ISeCountdownOptions = {};

    startSub$: Subscription;
    stopSub$: Subscription;

    constructor(private _countdown: SeCountdownService) {
        this.startSub$ = this._countdown.start$.subscribe((data: ISeCountdownOptions) => this.start(data));
        this.stopSub$ = this._countdown.stop$.subscribe(() => this.stop());
    }

    ngOnInit() {
        this.setDefaultOptions();
    }

    setDefaultOptions(): void {
        // if we passed options from html template automatically show the timer
        if (Object.keys(this.options).length > 0) {
            this.options = Object.assign({}, { isStart: true }, this.options);
        }
    }

    start(options: ISeCountdownOptions): void {
        this.options = Object.assign({}, this.options, options);
        this._start();
    }

    stop(): void {
        this._stop();
    }

    private _start(): void {
        this.options.isStart = true;

        if (this.options.start) {
            this.options.start(this.options);
        }
    }

    private _stop(): void {
        this.options.isStart = false;

        if (this.options.stop) {
            this.options.stop(this.options);
        }
    }
}