import { Component } from '@angular/core';

import { AppConfigService } from './app.config.service';

import '../public/scss/styles.scss';

@Component({
    selector: 'app',
    template: `
    <h1>{{'HOME.TITLE' | translate }}</h1>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {

    constructor(private appConfig: AppConfigService) {
        appConfig.setDefaultLanguage();
    }

}