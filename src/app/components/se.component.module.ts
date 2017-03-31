import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { SeAsideComponent } from './se-aside/se-aside.component';
import { SeAsideService } from './se-aside/se-aside.service';
import { SeAsideItemComponent } from './se-aside/se-aside-item/se-aside-item.component';
import { SeHeaderComponent } from './se-header/se-header.component';
import { SeHeaderService } from './se-header/se-header.service';
import { SeLoaderComponent } from './se-loader/se-loader.component';
import { SeLoaderService } from './se-loader/se-loader.service';

const COMPONENTS = [
    SeAsideItemComponent,
    SeAsideComponent,
    SeHeaderComponent,
    SeLoaderComponent
];

const SERVICE = [
    SeAsideService,
    SeHeaderService,
    SeLoaderService
];

@NgModule({
    imports     : [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    exports     : [...COMPONENTS],
    declarations: [...COMPONENTS],
    providers   : [...SERVICE],
})
export class SeComponentModule { }
