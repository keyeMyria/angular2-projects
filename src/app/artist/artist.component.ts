import { Component } from '@angular/core';
import { ITunesService } from './itunes.service';

@Component({
    selector: 'article-component',
    template: require('./artist.html')
})
export class ArtistComponent {

    selectedArtistName: string;
    searchArtistResult: any[] = [];
    searchAlbumResult: any[] = [];

    constructor(private itunes: ITunesService) {
    }

    public searchArtist(term: string) {
        this.itunes.searchArtist(term)
            .subscribe((res: any) => this.searchArtistSuccessHandler(res),
                (error: any) => {
                    console.log(error);
                });
    }

    public searchArtistSuccessHandler(res: { results: Object[], resultsCount: number }) {
        this.searchArtistResult = res.results;
    }

    public getAlbums(artistId: number, artistName: string) {
        this.selectedArtistName = artistName;
        this.itunes.searchAlbumsByArtistId(artistId)
            .subscribe(
                (res: any) => this.searchAlbumsSuccessHandler(res),
                (error: any) => {
                    console.log(error);
                });
    }

    public searchAlbumsSuccessHandler(res: { results: Object[], resultsCount: number }) {
        this.searchAlbumResult = res.results;
        console.log(res)
    }

}