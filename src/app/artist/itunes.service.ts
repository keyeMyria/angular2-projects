import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs';

const API = {
    SEARCH: 'https://itunes.apple.com/search?',
    LOOKUP: 'https://itunes.apple.com/lookup?'
};

@Injectable()
export class ITunesService {

    constructor(private jsonp: Jsonp) {}

    public search(term: string) {
        return this.jsonp.get(`${API.SEARCH}callback=JSONP_CALLBACK&media=music&country=US&entity=musicArtist&term=${term}`)
            .map(data => data.json())
            .catch(this.errorHandler);
    }

    private errorHandler(error: any) {
        console.log(error);

        return Observable.throw(error);
    }
}