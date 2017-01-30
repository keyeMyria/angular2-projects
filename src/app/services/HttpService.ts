import { Injectable } from '@angular/core';
import {
    Http,
    Response,
    RequestOptionsArgs,
    Request,
    Headers,
    ConnectionBackend,
    RequestOptions,
    RequestMethod, URLSearchParams
} from '@angular/http';
import { Observable } from 'rxjs';
import { CONSTANTS } from './../configs';

@Injectable()
export class HttpService extends Http {

    protected _headers: Headers;

    constructor(backend: ConnectionBackend,
                defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }

    requestLocal(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options);
    }

    request(url: string, options?): Observable<Response> {
        options = this.requestOptions(options);

        return super.request(this.getFullUrl(url), options)
            .catch(this.onCatch)
            .do(
                (res: Response) => {
                    this.onSubscribeSuccess(res);
                },
                (error: any) => {
                    this.onSubscribeError(error);
                }
            )
            .finally(
                () => {
                    this.responseInterceptor();
                });
    }

    setHeader(headers: Headers) {
        this._headers = headers;
    }

    private getFullUrl(url: string): string {
        url = CONSTANTS.API_URL + url;
        return url;
    }

    private requestOptions(options?): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }

        if (options.headers == null) {
            options.headers = new Headers();
            options.headers.append('Content-Type', 'application/json');
        }

        if (options.queryParams) {
            options.search = this.toSearchParams(options.queryParams);
        }

        return options;
    }

    private toSearchParams(obj: Object): URLSearchParams {
        let params: URLSearchParams = new URLSearchParams();
        for (let key in obj) {
            if(obj.hasOwnProperty(key)) {
                params.set(key, obj[key])
            }
        }
        return params;
    }

    private requestInterceptor(): void {

    }

    private responseInterceptor(): void {

    }

    private onCatch(error: Response): Observable<any> {
        if (error instanceof Response) {
            const body = error.json();
            console.log(body);
        }
        return Observable.throw(error);
    }

    private onSubscribeSuccess(res: Response): void {

    }

    private onSubscribeError(error: any): void {

    }

    private onFinally(): void {
        this.responseInterceptor();
    }
}