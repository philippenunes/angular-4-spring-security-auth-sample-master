import { AuthGuard } from './guards/auth.service';
import { PageNotFoundComponent } from './app.page-not-found.component';
import { UserInfoPanelComponent } from './user-info-panel/user-info-panel.component';
import { OutroPanelComponent } from './outro-panel/outro-panel.component';
import { LoginPanelComponent } from './login-panel/login-panel.component';

import { Routes, RouterModule } from "@angular/router";

import { ModuleWithProviders } from "@angular/core";


export const APP_ROUTES: Routes = [

    { path: 'login', component: LoginPanelComponent},
    { path: 'outro', component: OutroPanelComponent,
        canActivate: [AuthGuard]
    },
    { path: 'home', component: UserInfoPanelComponent },
    { path: '',   redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard] },
    { path: '**', component: PageNotFoundComponent },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);