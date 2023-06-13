import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAntecedentesComponent } from './editar-antecedentes.component';

describe('EditarAntecedentesComponent', () => {
  let component: EditarAntecedentesComponent;
  let fixture: ComponentFixture<EditarAntecedentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAntecedentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAntecedentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
