import { Component, OnInit } from '@angular/core';

import { AppConfigService } from './app.config.service';

import '../public/scss/styles.scss';
import 'bootstrap-grid';

@Component({
    selector: 'app',
    styles: [require('./app.css')],
    template: `
    <h1 class="app">App</h1>
    `
})
export class AppComponent implements OnInit {

    array = [23, 3, 4,  12, 53, 12, 21, 56, 41];

    constructor(private appConfig: AppConfigService) {
        appConfig.setDefaultLanguage();
    }

    ngOnInit() {
        this.insectionSort(this.array);
        console.log(this.array);
    }

    insectionSort(arr: number[]) {
        
    }
}