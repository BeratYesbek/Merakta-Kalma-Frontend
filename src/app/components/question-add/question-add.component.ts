import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { QuestionService } from 'src/app/services/questionService/question.service';

@Component({
  selector: 'app-question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.css']
})

export class QuestionAddComponent implements OnInit {
  myModel: string = "";
  tags: string[] = [];
  files: File[] = [];
  questionForm!: FormGroup

  constructor(
    private msg: NzMessageService,
    private formBuilder: FormBuilder,
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this.createQuestionFormGroup()
  }
  onSearchChange(searchValue: string) {
    console.log(searchValue);
    if (searchValue.includes(",")) {
      this.tags.push(searchValue.substring(0, searchValue.indexOf(",")));
      this.myModel = "";
    }
  }
  onClose(tag: string): void {
    this.tags.splice(this.tags.indexOf(tag), 1);
  }

  createQuestionFormGroup() {
    this.questionForm = this.formBuilder.group({
      title: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

  onFileChange(value: any): void {
    if (value.target.files.length > 2) {
      this.msg.error("You can only upload 2 files at a time");
    }
    if (value.target.files.length > 0) {
      for (let i = 0; i < value.target.files.length; i++) {
        this.files.push(value.target.files[i]);
      }
    }
  }

  deleteFile(file: File): void {
    this.files.splice(this.files.indexOf(file), 1);
  }

  onSubmit(): void {
    let questionCreateDto = Object.assign({}, this.questionForm.value);
    
    let form = new FormData()
    form.append("title",questionCreateDto.title);
    form.append("description",questionCreateDto.title);
    form.append("userId","1");
    this.tags.forEach(tag => {
      form.append("tags",tag);
    })
    this.files.forEach(file => {
      form.append("files",file);

    })

    this.questionService.add(form).subscribe(response => {
      if (response.sucess) {
        
      }
      else {

      }
    })
  }
}
