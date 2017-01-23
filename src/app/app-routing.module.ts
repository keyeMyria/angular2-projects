import { NgModule }              from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login';
import { PageNotFoundComponent } from './components/page-not-found';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}