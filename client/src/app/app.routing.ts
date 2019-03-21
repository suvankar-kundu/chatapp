import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { AuthGuard } from './guards';

const appRoutes: Routes = [
    { path: '', loadChildren: './pages/login/login.module#LoginModule' },
    {
        path: 'app', component: DashboardComponent, canActivate: [AuthGuard],
        children: [
            { path: 'dashboard', loadChildren: './pages/dashboard/views/profile/profile.module#ProfileModule' }
        ]
    },
//    otherwise redirect to home
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
  })

//export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
export class AppRouting {}





