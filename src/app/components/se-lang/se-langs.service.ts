import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '../../services/storage.service';

@Injectable()
export class SeLangsService {

    defaultLang: string = 'en';
    defaultLangs: string[] = [this.defaultLang, 'uk'];

    constructor(private _translate: TranslateService) {
        this.setDefaultLang('en');
    }

    addLangs(langs: string[] = this.defaultLangs): void {
        this._translate.addLangs(langs);
    }

    setDefaultLang(lang: string): void {
        this._translate.setDefaultLang(lang);
    }

    getLangs(): string[] {
        return this._translate.getLangs();
    }

    useLang(lang: string): void {
        StorageService.setLang(lang);
        this._translate.use(lang);
    }

    getLang(): string {
        return StorageService.getLang() || this.defaultLang;
    }
}