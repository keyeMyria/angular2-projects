import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ISeCountdownOptions } from './ISeCountdown';

@Injectable()
export class SeCountdownService {

    startSource = new Subject();
    stopSource = new Subject();

    start$ = this.startSource.asObservable();
    stop$ = this.stopSource.asObservable();

    constructor() { }

    start(options?: ISeCountdownOptions): void {
        this.startSource.next(options);
    }

    stop(): void {
        this.stopSource.next();
    }

}