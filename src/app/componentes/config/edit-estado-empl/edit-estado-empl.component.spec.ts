import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEstadoEmplComponent } from './edit-estado-empl.component';

describe('EditEstadoEmplComponent', () => {
  let component: EditEstadoEmplComponent;
  let fixture: ComponentFixture<EditEstadoEmplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEstadoEmplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEstadoEmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
