import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarrTipoDePreexistenciaComponent } from './editarr-tipo-de-preexistencia.component';

describe('EditarrTipoDePreexistenciaComponent', () => {
  let component: EditarrTipoDePreexistenciaComponent;
  let fixture: ComponentFixture<EditarrTipoDePreexistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarrTipoDePreexistenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarrTipoDePreexistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
