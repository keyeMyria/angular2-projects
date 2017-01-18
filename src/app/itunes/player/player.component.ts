import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PlayerService } from '../services/player.service';

@Component({
    selector: 'player-component',
    template: require('./player.html')
})
export class PlayerComponent implements OnInit {

    @ViewChild('player') playerRef: ElementRef;
    player: any;

    constructor(private playerService: PlayerService) {
        playerService.playTrack$.subscribe((previewUrl) => {
            this.playTrack(previewUrl);
        });

        playerService.pauseTrack$.subscribe(() => {
            this.pauseTrack();
        });
    }

    ngOnInit() {
        this.player = this.playerRef.nativeElement;
    }

    playTrack(previewUrl: string) {
        this.player.src = previewUrl;
        this.player.play();
    }

    pauseTrack() {
        this.player.pause();
    }

    playEnded() {
        this.playerService.playEnded();
    }
}