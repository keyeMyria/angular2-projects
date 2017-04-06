import { Injectable } from '@angular/core';

import { LangsStorage } from './langs.storage';
import { LoginStorage } from './login.storage';

@Injectable()
export class StorageService {

    langs: LangsStorage = new LangsStorage();
    login: LoginStorage = new LoginStorage();
}