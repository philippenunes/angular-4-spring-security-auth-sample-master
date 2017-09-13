import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { Http, BaseRequestOptions, ResponseOptions } from '@angular/http';
import { LoginService } from './login-panel.service'; 
import { TestBed } from "@angular/core/testing";
import {MockBackend} from "@angular/http/testing";
import { fakeAsync } from "@angular/core/testing";
import { tick } from "@angular/core/testing";

describe('Service: LoginService', () => {

    let loginService: LoginService;
    let backend: MockBackend;
    let endPoint: string;

     beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                MockBackend,
                BaseRequestOptions,
                RouterTestingModule,
                {
                    provide: Http, 
                    useFactory: (backend, options) => new Http(backend, options), 
                    deps: [MockBackend, BaseRequestOptions] 
                }
            ]
        });
        
        loginService = new LoginService(this.providers);

        backend = TestBed.get(MockBackend);
        // loginService = TestBed.get(loginService);
     });

     afterEach(() => { 
        loginService = null;
        localStorage.removeItem('token');
     });

    fit('Deve retornar true de isAuthenticated quando lá tiver um token currentUser', () => {
        localStorage.setItem('currentUser', 'admin');
        expect(loginService.isAuthenticated()).toBeTruthy();
    });

    fit('Deve retornar false de isAuthenticated quando lá não tiver nenhum token currentUser', () => {
        localStorage.removeItem('currentUser');
        expect(loginService.isAuthenticated()).toBeFalsy();
    });

    it('Deve chamar o metodo getResource', fakeAsync(() => {
        var greetingMock = {
            id: '1',
            content: 'HelloWorld'
        }

        this.endpoint = '/sample/api/resource/';

        backend.connections.subscribe(connection => {
            connection.mockRespond(new Response (<ResponseOptions>{
                body: JSON.stringify(greetingMock)
            }))
        })

        loginService.getResource();
        tick();
    }));

});