import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing';
import { SeModule } from '../components/se.module';

@NgModule({
    imports     : [CommonModule, PagesRoutingModule, SeModule],
    declarations: [PagesComponent],
})
export class PagesModule {
}