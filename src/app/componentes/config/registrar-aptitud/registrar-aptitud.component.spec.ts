import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAptitudComponent } from './registrar-aptitud.component';

describe('RegistrarAptitudComponent', () => {
  let component: RegistrarAptitudComponent;
  let fixture: ComponentFixture<RegistrarAptitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAptitudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarAptitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
