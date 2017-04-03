import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import 'bootstrap-grid';
import { SeLangsService } from './components/se-lang/se-langs.service';

@Component({
    selector     : 'app',
    styles       : [require('./app.scss'), require('../scss/styles.scss')],
    encapsulation: ViewEncapsulation.None,
    template     : `    
        <router-outlet></router-outlet>
    `
})
export class AppComponent implements OnInit {

    constructor(private _seLangs: SeLangsService) {
    }

    ngOnInit(): void {
        this._seLangs.addLangs();
        this._seLangs.useLang(this._seLangs.getLang());
    }
}