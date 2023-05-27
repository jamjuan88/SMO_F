import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaltasEditComponent } from './faltas-edit.component';

describe('FaltasEditComponent', () => {
  let component: FaltasEditComponent;
  let fixture: ComponentFixture<FaltasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaltasEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaltasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
