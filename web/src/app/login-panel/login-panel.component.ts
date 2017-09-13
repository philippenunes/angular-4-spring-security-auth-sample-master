import { Response } from '@angular/http';
import { EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Component, OnInit } from '@angular/core';
import { LoginService } from "./login-panel.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-panel',
  providers: [LoginService],
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent implements OnInit {
  
  private credentials: Usuario = new Usuario;
  error: boolean = false; 

  constructor(
    private loginService : LoginService,
    private router : Router) {}
  
  ngOnInit() {}

  login() {
     let headers: object;    
     headers = this.credentials ? { 
       authorization : "Basic " + btoa(this.credentials.username + ":" + this.credentials.password),
       'X-Requested-With':'XMLHttpRequest'} : {}; 
     this.loginService.login(headers) 
     .subscribe(result => {
      this.router.navigate(['/']);    
      }, error => {
        this.error = true;
      }
    );
  }
}
 
