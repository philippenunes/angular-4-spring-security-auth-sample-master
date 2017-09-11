import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LogoutUserService {

  constructor(private router: Router) { }

  logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['login']);
        
    }

}
