import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class AppTranslateService {

    constructor(private translate: TranslateService) {
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }

    addLangs() {
        this.translate.addLangs(['en', 'uk']);
    }

    setDefaultLang(lang: string) {

    }
}