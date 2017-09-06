import { LoginService } from './../login-panel/login-panel.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate {
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

     if(this.loginService.isAuthenticated()) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
  }
  constructor(private loginService: LoginService, private router: Router) {
  }
}