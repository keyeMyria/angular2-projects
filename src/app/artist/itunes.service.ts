import { Injectable } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import { Observable } from 'rxjs';

interface IArtistCache {
    [key: string]: Observable<Response>;
}

const API = {
    SEARCH: 'https://itunes.apple.com/search?',
    LOOKUP: 'https://itunes.apple.com/lookup?'
};

@Injectable()
export class ITunesService {

    private _artistCache: IArtistCache = {};

    constructor(private jsonp: Jsonp) {}

    public search(term: string): Observable<Response> {
        if(this._artistCache[term]) {
            console.log('cache');
            return this.getArtistCache(term);
        } else {
            console.log('not cache');
            return this.searchArtist(term);
        }
    }

    private searchArtist(term: string): Observable<Response> {
        return this.jsonp.get(`${API.SEARCH}callback=JSONP_CALLBACK&media=music&country=US&entity=musicArtist&term=${term}`)
            .map(data => {
                data = data.json();

                this._artistCache[term] = Observable.create((observer: any) => {
                    observer.next(data);
                    observer.complete();
                });

                return data;
            })
            .catch(this.errorHandler);
    }

    private getArtistCache(key: string): Observable<Response> {
        return this._artistCache[key];
    }

    private errorHandler(error: any) {
        console.log(error);

        return Observable.throw(error);
    }
}