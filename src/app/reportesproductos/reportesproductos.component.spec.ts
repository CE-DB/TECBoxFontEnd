import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesproductosComponent } from './reportesproductos.component';

describe('ReportesproductosComponent', () => {
  let component: ReportesproductosComponent;
  let fixture: ComponentFixture<ReportesproductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesproductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
