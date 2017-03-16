import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GAMES_ROUTING } from './games';

const routes: Routes = [
  {
      path: 'pages',
      component: PagesComponent,
      children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent },
      ]
  },
    ...GAMES_ROUTING
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);