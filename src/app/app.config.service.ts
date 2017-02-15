import { Injectable } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Injectable()
export class AppConfigService {

    constructor(private translate: TranslateService) {

    }

    setDefaultLanguage() {
        this.translate.addLangs(['en', 'ua', 'ua']);
        this.translate.setDefaultLang('ua');
        this.translate.use('ua');
    }
}