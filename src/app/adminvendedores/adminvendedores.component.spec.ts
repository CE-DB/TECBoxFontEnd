import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminvendedoresComponent } from './adminvendedores.component';

describe('AdminvendedoresComponent', () => {
  let component: AdminvendedoresComponent;
  let fixture: ComponentFixture<AdminvendedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminvendedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminvendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
