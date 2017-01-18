import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';

import { ITunesService } from './services/itunes.service';
import { ArtistComponent } from './artist/artist.component';
import { MaterialModule } from '@angular/material';
import { InputDebounce } from './components/input-debounce.component';
import { FormsModule } from '@angular/forms';
import { AlbumComponent } from "./album/album.component";
import { TrackComponent } from "./track/track.component";
import { TrackControlComponent } from "./track/track-control/track-control.component";
import { PlayerService } from "./services/player.service";
import { PlayerComponent } from './player/player.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        JsonpModule,
        FormsModule,
        MaterialModule.forRoot(),
    ],
    declarations: [
        ArtistComponent,
        AlbumComponent,
        InputDebounce,
        PlayerComponent,
        TrackComponent,
        TrackControlComponent
    ],
    exports: [ ArtistComponent ],
    providers: [ ITunesService, PlayerService ]
})
export class ITunesModule {

}