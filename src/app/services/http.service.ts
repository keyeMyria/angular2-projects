import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpError } from '../exceptions/HttpError';

@Injectable()
export class HttpService {

    constructor(private _http: Http) {
    }

    rawRequest(url: string, options?: RequestOptionsArgs): Observable<any> {
        return this._http.request(url, options);
    }

    request(url: string, options?: RequestOptionsArgs): Observable<any> {
        this.createRequestOptions(options);
        return this._http.request(this.getApiUrl(url), options);
    }

    createRequestOptions(options: RequestOptionsArgs = {}) {
        return (new RequestOptions());
    }

    getApiUrl(url: string): string {
        return `` + url;
    }

    private _onCatch(error: any): Observable<any> {
        let throwError;

        try {
            throwError = error.json();
        } catch (e) {

        }

        throwError = new HttpError(throwError);

        return Observable.throw(throwError);
    }
}