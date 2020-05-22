import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsucursalesComponent } from './adminsucursales.component';

describe('AdminsucursalesComponent', () => {
  let component: AdminsucursalesComponent;
  let fixture: ComponentFixture<AdminsucursalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsucursalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
