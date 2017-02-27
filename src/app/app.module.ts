import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppConfigService } from './app.config.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports     : [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent
    ],
    providers   : [
        AppConfigService
    ],
    bootstrap   : [AppComponent]
})
export class AppModule {

}