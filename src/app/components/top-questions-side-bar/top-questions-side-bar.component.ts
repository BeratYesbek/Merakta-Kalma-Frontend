import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-questions-side-bar',
  templateUrl: './top-questions-side-bar.component.html',
  styleUrls: ['./top-questions-side-bar.component.css']
})
export class TopQuestionsSideBarComponent implements OnInit {
  loading = false;
  data = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
    {
      title: 'Ant Design Title 4'
    }
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  askQuestion(): void {
    this.router.navigate(['/question/create']);
  }

}
