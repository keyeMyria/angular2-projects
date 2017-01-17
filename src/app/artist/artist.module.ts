import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { ITunesService } from '../services/itunes.service';
import { ArtistComponent } from './artist.component';
import { MaterialModule } from '@angular/material';
import { InputDebounce } from '../components/input-debounce.component';
import { FormsModule } from '@angular/forms';
import { AlbumComponent } from "../album/album.component";

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
        InputDebounce
    ],
    exports: [ ArtistComponent ],
    providers: [ ITunesService ]
})
export class ArtistModule {

}