import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class PlayerService {

    private playTrackSource = new Subject<string>();
    private pauseTrackSource = new Subject();
    private trackEndedSource = new Subject();

    playTrack$ = this.playTrackSource.asObservable();
    pauseTrack$ = this.pauseTrackSource.asObservable();
    trackEnded$ = this.trackEndedSource.asObservable();

    constructor() { }

    public playTrack(previewUrl: string) {
        this.playTrackSource.next(previewUrl);
    }

    public pauseTrack() {
        this.pauseTrackSource.next();
    }

    public playEnded() {
        this.playTrackSource.next();
    }
}