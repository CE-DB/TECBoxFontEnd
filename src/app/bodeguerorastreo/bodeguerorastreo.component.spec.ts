import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodeguerorastreoComponent } from './bodeguerorastreo.component';

describe('BodeguerorastreoComponent', () => {
  let component: BodeguerorastreoComponent;
  let fixture: ComponentFixture<BodeguerorastreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodeguerorastreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodeguerorastreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
