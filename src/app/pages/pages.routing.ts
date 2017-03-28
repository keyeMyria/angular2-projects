import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionsFormComponent } from './questions/questions-form.component';

const routes: Routes = [
  {
      path: 'pages',
      component: PagesComponent,
      children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'questions', component: QuestionsFormComponent }
      ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);