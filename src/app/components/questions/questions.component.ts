import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  loading = false;

  constructor(private router :Router) { }

  ngOnInit(): void {
  }

  showDetail(): void{
    this.router.navigate(['/questions/1']);
  }

}
