import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login';
import { PageNotFoundComponent } from './components/page-not-found';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });