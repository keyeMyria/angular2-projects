import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpError } from '../exceptions/HttpError';
import { apiRequestHeaders } from './headers';
import { StorageService } from './storage';
import { Router } from '@angular/router';

@Injectable()
export class HttpService {

    _defaultHeader: Headers = apiRequestHeaders(this._storage.langs.getLang(), this._storage.login.getToken());

    API_URL: string;

    get defaultHeaders() {
        return this._defaultHeader;
    }

    set defaultHeaders(headers: Headers) {
        this.defaultHeaders = headers;
    }

    defaultMethod: string = 'GET';

    constructor(private _http: Http, private _storage: StorageService, private _router: Router) {
        if (process.env.NODE_ENV === 'production') {
            this.API_URL = '';
        } else {
            this.API_URL = '';
        }
    }

    rawRequest(url: string, options?: RequestOptionsArgs): Observable<any> {
        return this._http.request(url, options)
            .map((res) => {
                try {
                    return {
                        response: res.json(),
                        headers : res.headers
                    };
                } catch (e) {
                }
                return res;
            });
    }

    request(url: string, options?: RequestOptionsArgs): Observable<any> {
        let req = this.createRequestOptions(options);
        return this._http.request(this.getApiUrl(url), req)
            .map((res) => this._requestMap(res))
            .catch(this._onCatch);
    }

    createRequestOptions(options: RequestOptionsArgs = {}): RequestOptionsArgs {
        let req = new RequestOptions(options);

        if (req.headers === null) {
            req.headers = this.defaultHeaders;
        }

        if (req.method === null) {
            req.method = this.defaultMethod;
        }

        return req;
    }

    getApiUrl(url: string): string {
        return this.API_URL + url;
    }

    private _requestMap(res: Response): any {
        try {
            return {
                status  : res.status,
                headers : res.headers,
                response: res.json()
            };
        } catch (e) {
        }
        return res;
    }

    private _onCatch(error: any): Observable<any> {
        let throwError;

        try {
            error = <HttpError> error.json();
            throwError = new HttpError(error);
        } catch (e) {
            throwError = new HttpError({
                status : 0,
                message: 'Server not responding'
            });
        }

        if (+throwError.status === 401) {
            this._storage.login.logout();
            this._router.navigate(['/login']);
        }

        return Observable.throw(throwError);
    }
}