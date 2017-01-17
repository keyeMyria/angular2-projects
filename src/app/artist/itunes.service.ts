import { Injectable } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import { Observable } from 'rxjs';

interface IReauestCache {
    [key: string]: Observable<Response>;
}

const API = {
    SEARCH: 'https://itunes.apple.com/search?',
    LOOKUP: 'https://itunes.apple.com/lookup?'
};

@Injectable()
export class ITunesService {

    private _artistCache: IReauestCache = {};
    private _albumsCache: IReauestCache = {};

    constructor(private jsonp: Jsonp) {}

    public searchArtist(term: string): Observable<Response> {
        if(this._artistCache[term]) {
            return this._artistCache[term];
        }

        return this._searchArtist(term);
    }

    public searchAlbumsByArtistId(artistId: number): Observable<Response> {
        if(this._albumsCache[artistId]) {
            return this._albumsCache[artistId];
        }

        return this._searchAlbumsByArtistId(artistId);
    }

    private _searchArtist(term: string): Observable<Response> {
        return this.jsonp.get(`${API.SEARCH}callback=JSONP_CALLBACK&media=music&country=US&entity=musicArtist&term=${term}`)
            .map(data => this._searchArtistMap(data, term))
            .catch(this.errorHandler);
    }

    private _searchArtistMap(data: Response, term: string) {
        data = data.json();

        this._artistCache[term] = Observable.create((observer: any) => {
            observer.next(data);
            observer.complete();
        });

        return data;
    }

    private _searchAlbumsByArtistId(artistId: number): Observable<Response> {
        return this.jsonp.get(`${API.LOOKUP}callback=JSONP_CALLBACK&entity=album&id=${artistId}`)
            .map(data => this._searchAlbumsMap(data, artistId))
            .map(data => {
                data['results'] = data['results'].filter((results: any) => {
                    return results.wrapperType == 'collection';
                });
                return data;
            })
            .catch(this.errorHandler);
    }

    private _searchAlbumsMap(data: Response, artistId: number) {
        data = data.json();

        this._albumsCache[artistId] = Observable.create((observer: any) => {
            observer.next(data);
            observer.complete();
        });

        return data;
    }

    private errorHandler(error: any) {
        return Observable.throw(error);
    }
}