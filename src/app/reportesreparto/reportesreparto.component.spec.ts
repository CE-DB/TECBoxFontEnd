import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesrepartoComponent } from './reportesreparto.component';

describe('ReportesrepartoComponent', () => {
  let component: ReportesrepartoComponent;
  let fixture: ComponentFixture<ReportesrepartoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesrepartoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesrepartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
