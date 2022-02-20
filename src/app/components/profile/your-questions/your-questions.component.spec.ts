import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourQuestionsComponent } from './your-questions.component';

describe('YourQuestionsComponent', () => {
  let component: YourQuestionsComponent;
  let fixture: ComponentFixture<YourQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
