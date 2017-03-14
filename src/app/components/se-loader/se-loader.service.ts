import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SeLoaderService {

    showLoaderSource = new Subject();
    hideLoaderSource = new Subject();

    showLoader$ = this.showLoaderSource.asObservable();
    hideLoader$ = this.hideLoaderSource.asObservable();

    constructor() { }

    showLoader() {
        this.showLoaderSource.next();
    }

    hideLoader() {
        this.hideLoaderSource.next();
    }

}