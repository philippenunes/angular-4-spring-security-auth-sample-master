import { LoginService } from './login-panel.service';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPanelComponent } from './login-panel.component';

describe('LoginPanelComponent', () => {
  
  let component: LoginPanelComponent;
  let fixture: ComponentFixture<LoginPanelComponent>;
  let loginService: LoginService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule, RouterTestingModule],
      declarations: [ LoginPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Deve chamar a função login', () => {
    
  });

});
