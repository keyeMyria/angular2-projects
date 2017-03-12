import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { PagesComponent } from './pages.component';
import { routing } from './pages.routing';
import { SeModule } from '../components/se.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
    imports     : [
        CommonModule,
        routing,
        SeModule,
        DashboardModule,
        MaterialModule
    ],
    declarations: [PagesComponent],
})
export class PagesModule {
}