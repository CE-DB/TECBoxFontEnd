import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodegueropaquetesComponent } from './bodegueropaquetes.component';

describe('BodegueropaquetesComponent', () => {
  let component: BodegueropaquetesComponent;
  let fixture: ComponentFixture<BodegueropaquetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodegueropaquetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodegueropaquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
