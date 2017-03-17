import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { PagesComponent } from './pages.component';
import { routing } from './pages.routing';
import { SeModule } from '../components/se.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    imports     : [
        CommonModule,
        routing,
        SeModule,
        MaterialModule,
    ],
    declarations: [PagesComponent, DashboardComponent],
})
export class PagesModule {
}