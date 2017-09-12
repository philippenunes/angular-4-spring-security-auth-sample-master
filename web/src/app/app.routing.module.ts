import { LogoutUserComponent } from './logout-user/logout-user.component';
import { AuthGuard } from './guards/auth.service';
import { PageNotFoundComponent } from './app.page-not-found.component';
import { UserInfoPanelComponent } from './user-info-panel/user-info-panel.component';
import { OutroPanelComponent } from './outro-panel/outro-panel.component';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders, NgModule } from "@angular/core";


const appRoutes: Routes = [

    { path: 'login', component: LoginPanelComponent},
    { path: 'outro', component: OutroPanelComponent, canActivate: [AuthGuard]},
    { path: 'home', component: UserInfoPanelComponent },
    { path: 'logout', component: LogoutUserComponent },
    { path: '',   redirectTo: 'home', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}