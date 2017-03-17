import { Component, OnInit } from '@angular/core';

import { SeAsideService } from '../components/se-aside/se-aside.service';
import { PAGES_MENU } from './pages.menu';

@Component({
    selector: 'pages',
    styles  : [require('./pages.scss')],
    template: `
        <se-header></se-header>
        <div class="wrapper-content">
            <se-aside></se-aside>
            <section class="content-section animated fadeIn">
                <router-outlet></router-outlet>
            </section>
        </div>
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