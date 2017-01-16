import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ArtistModule } from './artist/artist.module';

@NgModule({
    imports     : [
        BrowserModule,
        MaterialModule.forRoot(),

        ArtistModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap   : [ AppComponent ]
})
export class AppModule {

}