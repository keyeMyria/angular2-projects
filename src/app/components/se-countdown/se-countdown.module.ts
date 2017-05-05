import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SeCountdownComponent } from './se-countdown.component';
import { SeCountdownService } from './se-countdown.service';

@NgModule({
    imports: [BrowserModule],
    exports: [SeCountdownComponent],
    declarations: [SeCountdownComponent],
    providers: [SeCountdownService],
})
export class SeCountdownModule { }
