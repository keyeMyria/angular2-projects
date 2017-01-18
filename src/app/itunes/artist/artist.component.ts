import { Component } from '@angular/core';
import { ITunesService } from '../services/itunes.service';

@Component({
    selector: 'artists',
    template: require('./artist.html')
})
export class ArtistComponent {

    selectedArtist: any;
    searchArtistResult: any[] = [];

    constructor(private itunes: ITunesService) {
    }

    public searchArtist(term: string) {
        this.itunes.searchArtist(term)
            .subscribe((res: any) => this.searchArtistSuccessHandler(res),
                (error: any) => {
                    console.log('error', error);
                });
    }

    public searchArtistSuccessHandler(res: { results: Object[], resultsCount: number }) {
        this.searchArtistResult = res.results;
    }

    public selectArtist(artist: any) {
        this.selectedArtist = artist;
    }
}