import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {

    canActivate() {
        const profile = JSON.parse(localStorage.getItem('profile'));

        return !(profile && profile.accessToken);
    }
}