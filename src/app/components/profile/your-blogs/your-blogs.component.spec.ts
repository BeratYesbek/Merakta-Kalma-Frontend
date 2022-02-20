import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourBlogsComponent } from './your-blogs.component';

describe('YourBlogsComponent', () => {
  let component: YourBlogsComponent;
  let fixture: ComponentFixture<YourBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
