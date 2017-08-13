import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearhComponent } from './searh.component';

describe('SearhComponent', () => {
  let component: SearhComponent;
  let fixture: ComponentFixture<SearhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
