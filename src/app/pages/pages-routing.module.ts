import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './login/auth-guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login-guard';

const routes: Routes = [
    {
        path     : '',
        component: PagesComponent,
        canActivate: [AuthGuard],
        children : [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
        ]
    },
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
    { path: '**', component: PageNotFoundComponent }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {
}