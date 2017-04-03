import { Injectable } from '@angular/core';
import { Http, Request } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

    constructor(private _http: Http) { }

    request(url: string|Request, optsions): Observable<any> {
        return this._http.request(``)
    }

    getApiUrl(url: string): string {
        return `` + url;
    }

}