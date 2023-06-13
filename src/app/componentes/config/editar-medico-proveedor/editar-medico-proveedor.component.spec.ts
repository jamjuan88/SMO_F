import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMedicoProveedorComponent } from './editar-medico-proveedor.component';

describe('EditarMedicoProveedorComponent', () => {
  let component: EditarMedicoProveedorComponent;
  let fixture: ComponentFixture<EditarMedicoProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarMedicoProveedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarMedicoProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
