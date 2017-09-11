import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'

@Injectable()
export class LoginService {

    public token: string;
    private url = '/sample/api/user';
    authEmitter = new EventEmitter<boolean>();

    constructor(private http: Http) {
    }

    isAuthenticated(): boolean {
       let authenticated = localStorage.getItem("currentUser");     
       return authenticated ? true: false; 
    }

    login(headers): Observable<Object> {
        return this.http.get(this.url, {headers : headers})
        .do((response: Response) => {
            let user = response.json();
            if(user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.authEmitter.emit(true);
                window.location.reload();
            }
        });      
           
    }
}
