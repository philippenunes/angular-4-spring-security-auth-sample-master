import { Observable } from 'rxjs/Observable';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'

@Injectable()
export class LoginService {

    public token: string;
    private userUrl = '/sample/api/user';
    private resourceUrl = '/sample/api/resource';

    constructor(private http: Http) {
    }

    isAuthenticated(): boolean {       
       let authenticated = localStorage.getItem("currentUser");     
       let isAuthenticated = authenticated ? true: false;      
       return isAuthenticated;
    }


    login(headers): Observable<Object> {
        return this.http.get(this.userUrl, {headers : headers})
        .do((response: Response) => {
            let user = response.json();
            if(user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                localStorage.setItem('user', user.principal);                            
            }
        });                 
    }

    getResource(): Observable<Map<String, Object>> {
        return this.http.get(this.resourceUrl).map(
            data => data.json() as Map<String, Object>
        );        
    }
}
