import {Component, OnInit, Input} from '@angular/core';
import {ITunesService} from "../services/itunes.service";

@Component({
    selector: 'album',
    template: require('./album.html')
})
export class AlbumComponent {
    _artistId: number;

    @Input()
    set artistId(artistId: number) {
        this._artistId = artistId;

        this.getAlbums();
    }

    get artistId() {
        return this._artistId
    }

    searchAlbumResult: any[] = [];

    constructor(private itunes: ITunesService) {

    }

    public getAlbums() {
        this.itunes.searchAlbumsByArtistId(this.artistId)
            .subscribe(
                (res: any) => this.searchAlbumsSuccessHandler(res),
                (error: any) => {
                    console.log('error', error);
                });
    }

    public getTrack(collectionId: number) {
        console.log(collectionId);
        this.itunes.getTrack(collectionId)
            .subscribe(
                (res: any) => this.getTrackSuccessHandler(res),
                (error: any) => {
                    console.log('error', error);
                });
    }

    private searchAlbumsSuccessHandler(res: {results: Object[], resultsCount: number}) {
        this.searchAlbumResult = res.results;
    }

    private getTrackSuccessHandler(data: any) {
        console.log(data);
    }
}