import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PlayerService } from '../../services/player.service';

@Component({
    selector: 'track-control',
    template: require('./track-control.html')
})
export class TrackControlComponent implements OnDestroy {

    @Input() public track: any;
    isPlaying: boolean = false;

    playSub: Subscription;
    endedSub: Subscription;

    constructor(private playerService: PlayerService) {
        this.playSub = playerService.playTrack$.subscribe(
            track => {
                this.isPlaying = false;
            }
        );

        this.endedSub = playerService.trackEnded$.subscribe(() => {
            this.isPlaying = false;
        });
    }

    ngOnDestroy() {
        this.playSub.unsubscribe();
        this.endedSub.unsubscribe();
    }

    public playTrack() {
        this.playerService.playTrack(this.track.previewUrl);
        this.isPlaying = true;
    }

    public pauseTrack() {
        this.playerService.pauseTrack();
        this.isPlaying = false;
    }

}