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
import { routing, APP_ROUTES } from "./app.routing";
import { HttpModule } from "@angular/http";
import { AuthGuard } from "./guards/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginPanelComponent,
    OutroPanelComponent,
    UserInfoPanelComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
  ],
  providers: [LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
