import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEstadoEmplComponent } from './registrar-estado-empl.component';

describe('RegistrarEstadoEmplComponent', () => {
  let component: RegistrarEstadoEmplComponent;
  let fixture: ComponentFixture<RegistrarEstadoEmplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarEstadoEmplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarEstadoEmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
