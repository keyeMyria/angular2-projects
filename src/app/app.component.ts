import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import 'bootstrap-grid';

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

    ngOnInit(): void {
        console.log('AppComponent ngOnInit');
    }
}