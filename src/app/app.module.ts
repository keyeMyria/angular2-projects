import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';
import { AppConfigService } from './app.config.service';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            deps: [Http],
            useFactory: (http: Http) => new TranslateStaticLoader(http, '/public/i18n', '.json')
        }),
        AppRoutingModule,
        PagesModule
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