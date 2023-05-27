import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPuestoComponent } from './registrar-puesto.component';

describe('RegistrarPuestoComponent', () => {
  let component: RegistrarPuestoComponent;
  let fixture: ComponentFixture<RegistrarPuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarPuestoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarPuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
