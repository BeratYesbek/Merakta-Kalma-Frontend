import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDistance } from 'date-fns';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { QuestionCommentReadDto } from 'src/app/models/dtos/question-comment-read-dto';
import { QuestionReadDto } from 'src/app/models/dtos/question-read-dto';
import { CommentService } from 'src/app/services/comment-service/comment.service';
import { QuestionService } from 'src/app/services/questionService/question.service';

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

  questionReadDto?: QuestionReadDto
  questionCommentReadDto: QuestionCommentReadDto[] = []
  commentFormGroup! : FormGroup

  constructor
    (
      private questionService: QuestionService,
      private commentService: CommentService,
      private route: ActivatedRoute,
      private formBuilder : FormBuilder
    ) { }

  ngOnInit(): void {
    this.createCommentForm()
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.getQuestionDetail(Number(params.get('id')))
        this.getAnswerDetailByQuestionId(Number(params.get('id')))
      }
    })
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

  createCommentForm() {
    this.commentFormGroup = this.formBuilder.group({
      description: ['',Validators.required ],
      questionId: [this.questionReadDto?.id,Validators.required],
      userId: ['']
    })
  }

  addComment() {
    let comment = Object.assign({}, this.commentFormGroup?.value)
    comment.userId = 1
    comment.questionId = this.questionReadDto?.id
    console.log(comment)
    this.commentService.add(comment).subscribe(response => {
      if (response.success) {
        
      }
    })
  }

  getQuestionDetail(questionId: number) {
    this.questionService.getDetailById(questionId).subscribe(response => {
      if (response.success) {
        console.log(response)
        this.questionReadDto = response.data
      }
    })
  }

  getAnswerDetailByQuestionId(questionId: number) {
    this.commentService.getCommentsByQuestionId(questionId).subscribe(response => {
      if (response.success) {
        console.log(response);
        this.questionCommentReadDto = response.data
        console.log(this.questionCommentReadDto)
      }
    });
  }

  answerBtn(form: HTMLElement, btn_answer: HTMLElement): void {
    form.classList.remove("display-none")
    btn_answer.classList.add('display-none')
  }

  cancelBtn(form: HTMLElement, btn_answer: HTMLElement) {
    form.classList.add('display-none')
    btn_answer.classList.remove('display-none')
  }
}



