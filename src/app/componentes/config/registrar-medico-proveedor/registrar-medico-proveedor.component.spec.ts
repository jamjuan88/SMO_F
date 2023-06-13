import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMedicoProveedorComponent } from './registrar-medico-proveedor.component';

describe('RegistrarMedicoProveedorComponent', () => {
  let component: RegistrarMedicoProveedorComponent;
  let fixture: ComponentFixture<RegistrarMedicoProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarMedicoProveedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarMedicoProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
