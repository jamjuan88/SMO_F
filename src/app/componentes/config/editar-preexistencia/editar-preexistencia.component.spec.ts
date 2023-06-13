import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPreexistenciaComponent } from './editar-preexistencia.component';

describe('EditarPreexistenciaComponent', () => {
  let component: EditarPreexistenciaComponent;
  let fixture: ComponentFixture<EditarPreexistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPreexistenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPreexistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
