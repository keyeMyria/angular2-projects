import { Component, OnInit } from '@angular/core';

import '../public/scss/styles.scss';
import 'bootstrap-grid';

@Component({
    selector: 'app',
    styles  : [require('./app.css')],
    template: `    
        <router-outlet></router-outlet>
    `
})
export class AppComponent {

}