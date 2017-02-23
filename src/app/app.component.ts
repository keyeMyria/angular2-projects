import { Component } from '@angular/core';

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
export class AppComponent {

    constructor(private appConfig: AppConfigService) {
        appConfig.setDefaultLanguage();
    }
}