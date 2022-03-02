import { Component, OnInit } from '@angular/core';
import {  Route, Router } from '@angular/router';
import { QuestionReadDto } from 'src/app/models/dtos/question-read-dto';
import { QuestionService } from 'src/app/services/questionService/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  loading = false;
  questionReadDto: QuestionReadDto[] = [];
  page: number = 0;
  pageSize = 5;

  constructor(
    private router: Router,
    private questionService: QuestionService
    ) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService.getAll().subscribe(response => {
      if(response.success){
        this.questionReadDto = response.data;
        console.log(this.questionReadDto);
      }

    })
  }

  showDetail(id:number): void {
    this.router.navigate([`/questions/${id}`]);	
  }

}
