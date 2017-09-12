import { LoginService } from './../login-panel/login-panel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  authenticated: boolean = false;

  constructor(private loginService: LoginService) { 
    
  }

  ngOnInit() {
    this.loginService.authEmitter.subscribe(
      auth => this.authenticated = auth
    );
  }

}
