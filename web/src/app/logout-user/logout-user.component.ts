import { LogoutUserService } from './logout-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
    template: '<h2>logout Page</h2>'
})
export class LogoutUserComponent implements OnInit {

    constructor(private logoutUserService: LogoutUserService) {}

    ngOnInit() { 
        this.logoutUserService.logout();
        window.location.reload();
    }
}