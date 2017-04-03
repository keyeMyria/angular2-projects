export class StorageService {

    static getLang(): string {
        return StorageService._get('lang');
    }

    static setLang(lang: string): void {
        StorageService._set('lang', lang);
    }

    static _get(key: string): any {
        return JSON.parse(window.localStorage.getItem(key) || null);
    }

    static _set(key: string, value: any): void {
        window.localStorage.setItem(key, JSON.stringify(value));
    }
}