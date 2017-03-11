import { Component, OnInit } from '@angular/core';

import { AppConfigService } from './app.config.service';
import { Sorting } from './sorting/sorting';

import '../public/scss/styles.scss';
import 'bootstrap-grid';

@Component({
    selector: 'app',
    styles  : [require('./app.css')],
    template: `    

    `
})
export class AppComponent implements OnInit {

    title: string = 'Test App';
    quote: string = '...';

    constructor(private appConfig: AppConfigService) {
    }

    ngOnInit() {
        this.appConfig.getQuote().then( (quote) => {
            this.quote = quote;
        });
    }

    test() {
        
    }
}