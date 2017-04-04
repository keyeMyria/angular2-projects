import { Component, OnInit, AfterViewInit } from '@angular/core';

import { SeAsideService } from '../components/se-aside/se-aside.service';
import { PAGES_MENU } from './pages.menu';
import { HttpService } from '../services/http.service';

const TEST1_URL = 'http://192.168.100.10:8581/api/v1/web/council/basic';
const TEST2_URL = 'http://192.168.100.10:8581/api/v1/web/deputy/active';

@Component({
    selector: 'pages',
    styles  : [require('./pages.scss')],
    template: `
        <!--<se-header></se-header>-->
        <div class="wrapper-content">
            <!--<se-aside></se-aside>-->
            <section class="content-section animated fadeIn">
                <router-outlet></router-outlet>
            </section>
        </div>
        <se-loader></se-loader>
    `
})
export class PagesComponent implements OnInit, AfterViewInit {

    constructor(private _asideService: SeAsideService, private _httpService: HttpService) {
    }

    ngOnInit() {
        this._httpService.request(TEST2_URL).subscribe(
            success => {
                console.log('success', success);
            },
            error => {
                console.log('error', error);
            }
        );
    }

    ngAfterViewInit() {
        this._asideService.updateMenuBar(PAGES_MENU);
    }
}