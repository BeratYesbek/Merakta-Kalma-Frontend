import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourAnswerComponent } from './your-answer.component';

describe('YourAnswerComponent', () => {
  let component: YourAnswerComponent;
  let fixture: ComponentFixture<YourAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
