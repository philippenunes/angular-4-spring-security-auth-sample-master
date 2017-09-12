import { AuthGuard } from './guards/auth.service';
import { Component, SimpleChanges, Input, OnInit, AfterContentChecked } from '@angular/core';
import { LoginService } from "./login-panel/login-panel.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentChecked {   

  authenticated: boolean = false;

  constructor(private loginService: LoginService) {
  }

   ngOnInit(): void {    
  }
  
  ngAfterContentChecked() {
    this.authenticated = this.loginService.isAuthenticated();
  }

}
