import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAptitudComponent } from './editar-aptitud.component';

describe('EditarAptitudComponent', () => {
  let component: EditarAptitudComponent;
  let fixture: ComponentFixture<EditarAptitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAptitudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAptitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
