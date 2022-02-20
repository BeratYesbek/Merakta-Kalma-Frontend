import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
