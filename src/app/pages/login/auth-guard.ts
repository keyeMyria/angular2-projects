import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _router: Router) {
    }

    canActivate() {
        const profile = JSON.parse(localStorage.getItem('profile'));

        if(!profile || !profile.accessToken) {
            this._router.navigate(['/login']);
            return false;
        }

        return true;
    }
}