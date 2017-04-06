import { Component, OnInit } from '@angular/core';
import { SeConfirmDialogService } from './se-confirm-dialog.service';
import { IConfirmSetting } from './IConfirmSetting';

@Component({
    selector: 'confirm-dialog',
    styles  : [require('./se-confirm-dialog.scss')],
    template: require('./se-confirm-dialog.html')
})
export class SeConfigDialogComponent implements OnInit {

    settings: IConfirmSetting = { title: '', message: ''};
    isOpen: boolean = false;

    constructor(private _confirmDialogService: SeConfirmDialogService) {

        _confirmDialogService.confirmOpen$.subscribe(
            (settings: IConfirmSetting) => this.confirmDialogOpen(settings)
        );
    }

    ngOnInit() {
    }

    confirmDialogOpen(settings: IConfirmSetting = this.settings) {
        this.settings = settings;
        this._confirmDialogOpen();
    }

    confirmDialogOk() {
        this._confirmDialogService.confirmDialogOk(this.settings);
        this._confirmDialogClose();
    }

    confirmDialogClose() {
        this._confirmDialogService.confirmDialogClose(this.settings);

        this._confirmDialogClose();
    }

    private _confirmDialogClose() {
        this.isOpen = false;
    }

    private _confirmDialogOpen() {
        this.isOpen = true;
    }
}