import { Component, OnInit } from '@angular/core';

import { SeAsideService } from '../components/se-aside/se-aside.service';
import { PAGES_MENU } from './pages.menu';

@Component({
    selector: 'pages',
    styles  : [require('./pages.scss')],
    template: `
        <se-header></se-header>
        <section class="animated fadeIn">
            <router-outlet></router-outlet>
        </section>
        <se-loader></se-loader>
    `
})
export class PagesComponent implements OnInit {

    constructor(private _asideService: SeAsideService) {
    }

    ngOnInit() {
        setTimeout(() => { this._asideService.updateMenuBar(PAGES_MENU); }, 0);
    }
}