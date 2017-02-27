import { Component, OnInit } from '@angular/core';

import { AppConfigService } from './app.config.service';

import '../public/scss/styles.scss';
import 'bootstrap-grid';

@Component({
    selector: 'app',
    styles  : [require('./app.css')],
    template: `    
        <h1 class="app">{{title}}</h1>
    `
})
export class AppComponent implements OnInit {

    title: string = 'Test App';
    sum: number = 0;

    constructor(private appConfig: AppConfigService) {

    }

    ngOnInit() {
        this.sum = this.appConfig.sum(2, 3);
    }
}