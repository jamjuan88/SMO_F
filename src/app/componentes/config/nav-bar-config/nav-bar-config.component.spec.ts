import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarConfigComponent } from './nav-bar-config.component';

describe('NavBarConfigComponent', () => {
  let component: NavBarConfigComponent;
  let fixture: ComponentFixture<NavBarConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
