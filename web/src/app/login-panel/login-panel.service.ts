import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'

@Injectable()
export class LoginService {

    public token: string;
    private url = '/sample/api/user';
    loginEventEmitter: EventEmitter<boolean> = new EventEmitter();
    //private headers = new Headers({ 'Content-Type': 'application/json' });
    //private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) {
        // Atribui o token se ele estiver salvo no local storage
        //var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        localStorage.setItem("authenticated", "false");
        localStorage.setItem("principal", null);
        //this.token = currentUser && currentUser.token;
    }

    getPrincipal() {
        return localStorage.getItem("principal");
    }

    isAuthenticated():Boolean {
       let authenticated = localStorage.getItem("authenticated");       
       return authenticated === "true" ? true: false; 
    }

    login(headers): Observable<Object> {
        return this.http.get(this.url, {headers : headers})
        .do(value => {
            localStorage.setItem("principal", value.json().principal);
            localStorage.setItem("authenticated", "true");
            this.loginEventEmitter.emit(true);
        });                  
    }
}




// import { Injectable, EventEmitter, Output } from "@angular/core";
// import { Http } from "@angular/http";
// import 'rxjs/add/operator/toPromise';

// @Injectable()
// export class LoginService {

//     userAthenticate: boolean = false;
//     apiRoot: string = '/sample/api';

//     @Output()
//     changeMenu = new EventEmitter<boolean>();


//     constructor(private http: Http) {
        
//     }

//     isAuthenticated(){}

//     login (headers : any) : Promise<any>  {
//      console.log(headers)
//      return this.http.get(`${this.apiRoot}/user`, { headers : headers})
//             .toPromise()
//             .then((response) => {
//                this.changeMenu.emit(true) 
//             })           
//             .catch(this.handleError);

//     } 

//     private handleError(error : any) : Promise<any> {
//         console.error('An error occurred');
//         return Promise.reject(error.message || error);
//     }

// }
