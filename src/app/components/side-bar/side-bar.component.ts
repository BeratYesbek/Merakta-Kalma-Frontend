import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeBtn(sidebar: HTMLElement, closebtn: HTMLElement) {
    
    sidebar.classList.toggle("open")
    if (sidebar.classList.contains("open")) {
      closebtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    } else {
      closebtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
    }

  }


}
