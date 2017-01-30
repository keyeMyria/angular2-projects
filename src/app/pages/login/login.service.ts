import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpService } from './../../services';

import { ILoginForm } from '../../interfaces';

@Injectable()
export class LoginService {

    constructor(private _httpService: HttpService) {
    }

    login(userData: ILoginForm): Observable<any> {
        userData['provider'] = 'ittstore';
        return this._httpService.request('/auth', {
            method: 'POST',
            body: JSON.stringify(userData)
        });
    }

    logout() {
        localStorage.removeItem('profile');
    }

}