import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IConfirmSetting } from './IConfirmSetting';

@Injectable()
export class SeConfirmDialogService {

    _confirmOpenSource = new Subject();
    _confirmOkSource = new Subject();
    _confirmCloseSource = new Subject();

    confirmOpen$ = this._confirmOpenSource.asObservable();
    confirmOk$ = this._confirmOkSource.asObservable();
    confirmClose$ = this._confirmCloseSource.asObservable();

    constructor() {
    }

    public confirmDialogOpen(settings: IConfirmSetting): void {
        this._confirmOpenSource.next(settings);
    }

    public confirmDialogClose(settings?: IConfirmSetting): void {
        this._confirmCloseSource.next(settings);
    }

    public confirmDialogOk(settings?: IConfirmSetting): void {
        this._confirmOkSource.next(settings);
    }
}