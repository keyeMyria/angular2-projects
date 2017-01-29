import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';
import { AppConfigService } from './app.config.service';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { HttpService } from './services/HttpService';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, '/public/i18n', '.json'),
            deps: [Http]
        }),
        AppRoutingModule,
        PagesModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        AppConfigService,
        HttpService
    ],
    exports: [
        TranslateModule,
        HttpModule,
        BrowserModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}