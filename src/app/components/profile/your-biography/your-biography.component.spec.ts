import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourBiographyComponent } from './your-biography.component';

describe('YourBiographyComponent', () => {
  let component: YourBiographyComponent;
  let fixture: ComponentFixture<YourBiographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourBiographyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourBiographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
