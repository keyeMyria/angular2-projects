export class BaseStorage {

    get(key: string): any {
        return JSON.parse(window.localStorage.getItem(key) || 'null');
    }

    set(key: string, value: any): void {
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    remove(key: string): void {
        window.localStorage.removeItem(key);
    }

    clearAll(): void {
        window.localStorage.clear();
    }
}