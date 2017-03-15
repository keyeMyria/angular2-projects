import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { PagesComponent } from './pages.component';
import { routing } from './pages.routing';
import { SeModule } from '../components/se.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GAMES_COMPONENT } from './games';

@NgModule({
    imports     : [
        CommonModule,
        routing,
        SeModule,
        MaterialModule,
    ],
    declarations: [PagesComponent, DashboardComponent, ...GAMES_COMPONENT],
})
export class PagesModule {
}