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
    quote = '...';

    constructor(private appConfig: AppConfigService) {
    }

    ngOnInit() {
        this.appConfig.getQuote().then( (quote) => {
            this.quote = quote;
        });

        let items = [4, 40, 7, 45, 15, 22, 25, 12, 5, 8, 2];

        console.log(Sorting.quickSort(items, 0, items.length - 1));
    }
}