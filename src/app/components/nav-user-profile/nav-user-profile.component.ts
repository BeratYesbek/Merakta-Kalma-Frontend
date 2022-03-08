import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-user-profile',
  templateUrl: './nav-user-profile.component.html',
  styleUrls: ['./nav-user-profile.component.css']
})
export class NavUserProfileComponent implements OnInit {

  isNotUserExists = true;
  isNotLoggedIn = false;
  constructor() { }

  ngOnInit(): void {
  }

  isUserLoggedIn() {
    this.isNotUserExists = false;
    this.isNotLoggedIn = true;

  }

}
