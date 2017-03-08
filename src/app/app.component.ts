import { Component, OnInit } from '@angular/core';

import { AppConfigService } from './app.config.service';
import { Sorting } from './sorting/sorting';

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

        Sorting.quickSort([4, 7, 12, 5, 15, 22, 45, 25]);
    }
}