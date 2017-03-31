export class StorageService {

    static getLang(): string {
        return StorageService._get('lang');
    }

    static _get(key: string): any {
        return window.localStorage.get(key)
    }
}