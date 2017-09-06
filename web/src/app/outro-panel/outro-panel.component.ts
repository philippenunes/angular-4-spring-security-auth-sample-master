import { LoginPanelComponent } from './../login-panel/login-panel.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outro-panel',
  templateUrl: './outro-panel.component.html',
  styleUrls: ['./outro-panel.component.css']
})
export class OutroPanelComponent implements OnInit {
  principal: string;

  constructor() {   
  }

  ngOnInit() {
  }

}
