import { BaseStorage } from './base.storage';

export class LoginStorage extends BaseStorage {

    setToken(token): void {
        super.set('_t', token);
    }

    getToken(): string {
        return super.get('_t');
    }

    setUser(user): void {
        super.set('user', user);
    }

    getUser(): any {
        return super.get('user');
    }

    logout(): void {
        super.remove('_t');
        super.remove('user');
    }
}