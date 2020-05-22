import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesentregadoComponent } from './reportesentregado.component';

describe('ReportesentregadoComponent', () => {
  let component: ReportesentregadoComponent;
  let fixture: ComponentFixture<ReportesentregadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesentregadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesentregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
