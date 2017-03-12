import { Component, ViewEncapsulation } from '@angular/core';

import '../public/scss/styles.scss';
import 'bootstrap-grid';

@Component({
    selector: 'app',
    styles  : [require('./../public/scss/styles.scss'), require('./app.scss')],
    encapsulation: ViewEncapsulation.None,
    template: `    
        <router-outlet></router-outlet>
    `
})
export class AppComponent {

}