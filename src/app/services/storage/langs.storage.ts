import { BaseStorage } from './base.storage';

export class LangsStorage extends BaseStorage {

    getLang(): string {
        return super.get('lang');
    }

    setLang(lang: string): void {
        super.set('lang', lang);
    }
}