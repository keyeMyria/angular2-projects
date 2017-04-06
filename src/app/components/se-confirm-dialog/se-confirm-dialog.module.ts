import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeConfigDialogComponent } from './se-configm-dialog.component';
import { SeConfirmDialogService } from './se-confirm-dialog.service';

const COMPONENTS = [
    SeConfigDialogComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [...COMPONENTS],
    declarations: [
        ...COMPONENTS
    ],
    providers: [SeConfirmDialogService],
})
export class SeConfirmDialogModule { }
