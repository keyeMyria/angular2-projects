import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';
import { AppConfigService } from './app.config.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, '/public/i18n', '.json'),
            deps: [Http]
        })
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        AppConfigService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}