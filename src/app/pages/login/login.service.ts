import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpService } from './../../services';

import { ILoginForm, IToken } from '../../interfaces';

const authToken: IToken = {
    accessToken : '123123123',
    refreshToken: '321321321',
    expire      : 3600
};

@Injectable()
export class LoginService {

    constructor(private httpService: HttpService) {
    }

    login(userData: ILoginForm): Observable<any> {

        if (userData.username === 'e' && userData.password === '123123') {
            return new Observable((observer: any) => {
                setTimeout(() => {
                    observer.next(authToken);
                    observer.complete();
                });
            });
        } else {
            return Observable.throw(new Error('invalid username or password'));
        }
    }

    logout() {
        localStorage.removeItem('profile');
    }

}