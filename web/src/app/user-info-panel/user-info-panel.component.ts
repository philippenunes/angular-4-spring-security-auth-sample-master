import { LoginService } from './../login-panel/login-panel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info-panel',
  templateUrl: './user-info-panel.component.html',
  styleUrls: ['./user-info-panel.component.css']
})
export class UserInfoPanelComponent implements OnInit {
  authenticated: Boolean;
  principal: string;

  constructor(loginService : LoginService) {
     this.authenticated = loginService.isAuthenticated();     
     this.principal = loginService.getPrincipal();
  }

  ngOnInit() {
  }

}
