import { Injectable } from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Injectable()
export class AppConfigService {

    constructor(private translate: TranslateService) {

    }

    setDefaultLanguage() {
        this.translate.addLangs(['en', 'ua']);
        this.translate.setDefaultLang('en');
        this.translate.use('en');
    }
}