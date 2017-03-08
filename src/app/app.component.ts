import { Component, OnInit } from '@angular/core';

import { AppConfigService } from './app.config.service';
import { mergeSort } from './sorting/sorting';
import { merge } from './sorting/utils';

import '../public/scss/styles.scss';
import 'bootstrap-grid';

@Component({
    selector: 'app',
    styles  : [require('./app.css')],
    template: `    
        <h1 class="app">{{title}}</h1>
        <p class="twain"><i>{{quote}}</i></p>
    `
})
export class AppComponent implements OnInit {

    title: string = 'Test App';
    quote = '...';

    constructor(private appConfig: AppConfigService) {
    }

    ngOnInit() {
        this.appConfig.getQuote().then( (quote) => {
            this.quote = quote;
        });

        mergeSort([4, 6, 1, 10, 7, 30, 4, 8, 23, 12, 100, 1, 0]);
    }
}