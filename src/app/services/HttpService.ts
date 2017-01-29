import { Injectable } from '@angular/core';
import {
    Http,
    Response,
    RequestOptionsArgs,
    Request,
    Headers,
    ConnectionBackend,
    RequestOptions
} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService extends Http {

    constructor(backend: ConnectionBackend,
                defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options);
    }

    getLocal(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.get(url, options);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        this.requestInterceptor();

        return super.get(this.getFullUrl(url), this.requestOptions(options))
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

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        this.requestInterceptor();

        return super.post(this.getFullUrl(url), body, this.requestOptions(options))
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

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        this.requestInterceptor();

        return super.put(this.getFullUrl(url), body, this.requestOptions(options))
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

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        this.requestInterceptor();

        return super.delete(this.getFullUrl(url), this.requestOptions(options))
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

    private getFullUrl(url: string): string {
        return url;
    }

    private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }

        if (options.headers == null) {
            options.headers = new Headers();
        }

        return options;
    }

    private requestInterceptor(): void {

    }

    private responseInterceptor(): void {

    }

    private onCatch(error: any): Observable<any> {
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