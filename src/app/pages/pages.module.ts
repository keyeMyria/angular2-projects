import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { PagesComponent } from './pages.component';
import { routing } from './pages.routing';
import { SeModule } from '../components/se.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionsFormComponent } from './questions/questions-form.component';

@NgModule({
    imports     : [
        CommonModule,
        ReactiveFormsModule,
        routing,
        SeModule,
        MaterialModule,
    ],
    declarations: [PagesComponent, DashboardComponent, QuestionsFormComponent],
})
export class PagesModule {
}