import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { formatDistance } from 'date-fns';
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {

  likes = 0;
  dislikes = 0;
  time = formatDistance(new Date(), new Date());
  loading = true;

  constructor() { }

  ngOnInit(): void {

  }
  onBack(): void {
    console.log('onBack');
  }
  like(): void {
    this.likes = 1;
    this.dislikes = 0;
  }

  dislike(): void {
    this.likes = 0;
    this.dislikes = 1;

  }

  answerBtn(form: HTMLElement, btn_answer: HTMLElement): void {
    form.classList.remove("display-none")
    btn_answer.classList.add('display-none')
  }

  cancelBtn(form: HTMLElement,btn_answer: HTMLElement)
  {
    form.classList.add('display-none')
    btn_answer.classList.remove('display-none')
  }
}



