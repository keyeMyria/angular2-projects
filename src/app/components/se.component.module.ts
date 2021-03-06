import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SeAsideComponent } from './se-aside/se-aside.component';
import { SeAsideService } from './se-aside/se-aside.service';
import { SeAsideItemComponent } from './se-aside/se-aside-item/se-aside-item.component';
import { SeHeaderComponent } from './se-header/se-header.component';
import { SeHeaderService } from './se-header/se-header.service';
import { SeLoaderComponent } from './se-loader/se-loader.component';
import { SeLoaderService } from './se-loader/se-loader.service';
import { SeLangsService } from './se-lang/se-langs.service';
import { SeLangsComponent } from './se-lang/se-langs.component';
import { SeControlMessageComponent } from './se-control-message/se-control-message.component';
import { SeProgressBarService } from './se-progress-bar/se-progress-bar.service';
import { SeProgressBarComponent } from './se-progress-bar/se-progress-bar.component';
import { SeCountdownModule } from './se-countdown/se-countdown.module';

const MODULES = [
    SeCountdownModule
];

const COMPONENTS = [
    SeAsideItemComponent,
    SeAsideComponent,
    SeHeaderComponent,
    SeLoaderComponent,
    SeLangsComponent,
    SeControlMessageComponent,
    SeProgressBarComponent
];

const SERVICE = [
    SeAsideService,
    SeHeaderService,
    SeLoaderService,
    SeLangsService,
    SeProgressBarService
];

@NgModule({
    imports     : [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        ...MODULES
    ],
    exports     : [...COMPONENTS, ...MODULES],
    declarations: [...COMPONENTS],
    providers   : [...SERVICE],
})
export class SeComponentModule {
}
