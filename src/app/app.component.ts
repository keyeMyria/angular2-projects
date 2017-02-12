import { Component } from '@angular/core';

import { AppConfigService } from './app.config.service';

import '../public/scss/styles.scss';

@Component({
    selector: 'app',
    template: `
    <router-outlet></router-outlet>
    `
})
export class AppComponent {

    constructor(private appConfig: AppConfigService) {
        appConfig.setDefaultLanguage();
    }

}