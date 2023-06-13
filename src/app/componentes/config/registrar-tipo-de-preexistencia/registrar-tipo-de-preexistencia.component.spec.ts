import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTipoDePreexistenciaComponent } from './registrar-tipo-de-preexistencia.component';

describe('RegistrarTipoDePreexistenciaComponent', () => {
  let component: RegistrarTipoDePreexistenciaComponent;
  let fixture: ComponentFixture<RegistrarTipoDePreexistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarTipoDePreexistenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarTipoDePreexistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
