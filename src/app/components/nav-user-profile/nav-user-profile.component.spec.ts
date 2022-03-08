import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavUserProfileComponent } from './nav-user-profile.component';

describe('NavUserProfileComponent', () => {
  let component: NavUserProfileComponent;
  let fixture: ComponentFixture<NavUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavUserProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
