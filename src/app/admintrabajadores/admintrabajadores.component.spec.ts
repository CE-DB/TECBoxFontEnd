import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintrabajadoresComponent } from './admintrabajadores.component';

describe('AdmintrabajadoresComponent', () => {
  let component: AdmintrabajadoresComponent;
  let fixture: ComponentFixture<AdmintrabajadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmintrabajadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintrabajadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
