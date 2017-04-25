import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ProgressBar {
    timeInSecond?: number;
}

@Injectable()
export class SeProgressBarService {

    showSource = new Subject();
    hideSource = new Subject();

    show$ = this.showSource.asObservable();
    hide$ = this.hideSource.asObservable();

    constructor() { }

    show(params) {
        this.showSource.next(params);
    }

    hide() {
        this.hideSource.next();
    }

}