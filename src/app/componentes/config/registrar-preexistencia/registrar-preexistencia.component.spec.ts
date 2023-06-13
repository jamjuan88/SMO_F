import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPreexistenciaComponent } from './registrar-preexistencia.component';

describe('RegistrarPreexistenciaComponent', () => {
  let component: RegistrarPreexistenciaComponent;
  let fixture: ComponentFixture<RegistrarPreexistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarPreexistenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarPreexistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
