import { Component, OnInit, OnDestroy } from '@angular/core';
import { SeLoaderService } from './se-loader.service';

@Component({
    selector : 'se-loader',
    styles   : [require('./se-loader.scss')],
    template : require('./se-loader.html'),
    providers: [SeLoaderService]
})
export class SeLoaderComponent implements OnInit, OnDestroy {

    public isShow: boolean = false;

    private _showLoaderSub: any;
    private _hideLoaderSub: any;

    constructor(private _loader: SeLoaderService) {
        this._showLoaderSub = this._loader.showLoader$.subscribe(this.showLoader.bind(this));
        this._hideLoaderSub = this._loader.hideLoader$.subscribe(this.hideLoader.bind(this));
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this._showLoaderSub.unsubscribe();
        this._hideLoaderSub.unsubscribe();
    }

    showLoader() {
        this.isShow = true;
    }

    hideLoader() {
        this.isShow = false;
    }

}