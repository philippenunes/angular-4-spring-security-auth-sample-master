import { getTestBed } from '@angular/core/testing';
import { LoginService } from './../login-panel/login-panel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info-panel',
  templateUrl: './user-info-panel.component.html',
  styleUrls: ['./user-info-panel.component.css']
})
export class UserInfoPanelComponent {

  authenticated: boolean;
  user: string;

  constructor(private loginService : LoginService) {
    this.user = localStorage.getItem('currentUser');
    this.authenticated = this.loginService.isAuthenticated();
  }

}

