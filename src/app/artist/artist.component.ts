import { Component } from '@angular/core';
import { ITunesService } from './itunes.service';

@Component({
    selector: 'article-component',
    template: require('./artist.html')
})
export class ArtistComponent {

    searchResult: any[] = [];
    searchResultCount: number;

    constructor(private itunes: ITunesService){

    }

    public search(term: string) {
        this.itunes.search(term)
            .subscribe(res => {
                this.searchResult = res.results;
                this.searchResultCount = res.resultsCount;
            }, error => {
                console.log(error);
            });
    }

    public getAlbums(artistId: number, artistName: string) {
        console.log(artistId);
        console.log(artistName);
    }
}