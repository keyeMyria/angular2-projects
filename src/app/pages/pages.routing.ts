import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
      path: 'pages',
      component: PagesComponent,
      children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }
      ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);