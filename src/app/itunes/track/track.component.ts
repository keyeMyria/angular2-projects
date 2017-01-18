import {Component, Input } from '@angular/core';
import { ITunesService } from "../services/itunes.service";

@Component({
    selector: 'track-component',
    template: require('./track.html')
})
export class TrackComponent {

    @Input()
    set collectionId(collectionId: number) {
        this.getTracks(collectionId);
    }

    trackResults: any[] = [];

    constructor(private itunes: ITunesService) { }

    private getTracks(collectionId: number) {
        this.itunes.getTrack(collectionId)
            .subscribe(
                (res: any) => this.getTrackSuccessHandler(res),
                (error: any) => {
                    console.log('error', error);
                });
    }

    private getTrackSuccessHandler(data: any) {
        this.trackResults = data.results;
    }
}