import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutroPanelComponent } from './outro-panel.component';

describe('OutroPanelComponent', () => {
  let component: OutroPanelComponent;
  let fixture: ComponentFixture<OutroPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutroPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutroPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
