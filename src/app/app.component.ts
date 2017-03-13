import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { Sorting } from './sorting/sorting';

@Component({
    selector: 'app',
    styles  : [require('./app.scss'), require('../public/scss/styles.scss')],
    encapsulation: ViewEncapsulation.None,
    template: `    
        <router-outlet></router-outlet>
    `
})
export class AppComponent implements OnInit {

    constructor() {
    }

    public ngOnInit(): void {
        let items: number[] = [23, 4, 12, 7, 222, 11, 19, 16, -10, 4, 19, 2, 0, -2, 41, 18];
        Sorting.quickSort(items);
    }
}