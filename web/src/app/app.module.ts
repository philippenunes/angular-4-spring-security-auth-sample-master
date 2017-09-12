import { MenuPrincipalComponent } from './user-menu/menu-principal.component';
import { AppRoutingModule } from './app.routing.module';
import { LogoutUserService } from './logout-user/logout-user.service';
import { LogoutUserComponent } from './logout-user/logout-user.component';
import { PageNotFoundComponent } from './app.page-not-found.component';
import { RouterModule } from '@angular/router';
import { LoginService } from './login-panel/login-panel.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { OutroPanelComponent } from './outro-panel/outro-panel.component';
import { UserInfoPanelComponent } from './user-info-panel/user-info-panel.component';
import { HttpModule } from "@angular/http";
import { AuthGuard } from "./guards/auth.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginPanelComponent,
    OutroPanelComponent,
    UserInfoPanelComponent,
    LogoutUserComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    LoginService,
    AuthGuard,
    LogoutUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
