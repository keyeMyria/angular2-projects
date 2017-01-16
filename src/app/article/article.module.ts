import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { ITunesService } from './shared/itunes.service';
import { ArticleComponent } from './article.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        JsonpModule,
    ],
    declarations: [
        ArticleComponent
    ],
    exports: [ ArticleComponent ],
    providers: [ ITunesService ]
})
export class ArticleModule {

}