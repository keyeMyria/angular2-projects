import { Injectable } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Injectable()
export class AppConfigService {

    getQuote(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve('Something');
        });
    }
}