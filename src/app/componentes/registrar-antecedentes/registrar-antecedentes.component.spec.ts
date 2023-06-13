import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAntecedentesComponent } from './registrar-antecedentes.component';

describe('RegistrarAntecedentesComponent', () => {
  let component: RegistrarAntecedentesComponent;
  let fixture: ComponentFixture<RegistrarAntecedentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAntecedentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarAntecedentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
