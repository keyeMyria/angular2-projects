import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { ITunesService } from './itunes.service';
import { ArtistComponent } from './artist.component';
import { MaterialModule } from '@angular/material';
import { InputDebounce } from '../components/input-debounce.component';
import { FormsModule } from '@angular/forms';

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
        InputDebounce
    ],
    exports: [ ArtistComponent ],
    providers: [ ITunesService ]
})
export class ArtistModule {

}