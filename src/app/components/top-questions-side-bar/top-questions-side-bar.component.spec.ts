import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopQuestionsSideBarComponent } from './top-questions-side-bar.component';

describe('TopQuestionsSideBarComponent', () => {
  let component: TopQuestionsSideBarComponent;
  let fixture: ComponentFixture<TopQuestionsSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopQuestionsSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopQuestionsSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
