import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasilleroComponent } from './casillero.component';

describe('CasilleroComponent', () => {
  let component: CasilleroComponent;
  let fixture: ComponentFixture<CasilleroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasilleroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasilleroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
