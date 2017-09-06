import { Component, SimpleChanges } from '@angular/core';
import { LoginService } from "./login-panel/login-panel.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  authenticated: boolean = false;

  constructor(private loginService: LoginService) {             
  }  

  ngOnInit() {      
    this.loginService.loginEventEmitter.subscribe(
      valor => {
        console.log("entrou");
        this.authenticated = valor;
      }
    );    
  }
}
