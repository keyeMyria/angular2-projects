import { NgModule } from '@angular/core';

import { SeCountdownComponent } from './se-countdown.component';
import { SeCountdownService } from './se-countdown.service';

@NgModule({
    imports: [],
    exports: [SeCountdownComponent],
    declarations: [SeCountdownComponent],
    providers: [SeCountdownService],
})
export class SeCountdownModule { }
