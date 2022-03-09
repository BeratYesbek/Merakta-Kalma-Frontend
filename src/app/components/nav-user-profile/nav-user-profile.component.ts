import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from 'src/app/services/event-emitter-service/event-emitter.service';

@Component({
  selector: 'app-nav-user-profile',
  templateUrl: './nav-user-profile.component.html',
  styleUrls: ['./nav-user-profile.component.css']
})
export class NavUserProfileComponent implements OnInit {

  isNotUserExists = true;
  isNotLoggedIn = false;
  userName?: string
  constructor(private eventEmitterService: EventEmitterService,
  ) { }

  ngOnInit(): void {

    if (this.eventEmitterService.subsLogin == undefined) {
      this.eventEmitterService.subsLogin = this.eventEmitterService.invokeLogginedInEvent
        .subscribe(response => {
          this.setUser()
        })
    }
  }

  setUser() {
    this.userName = `${localStorage.getItem('firstname')}  ${localStorage.getItem('lastname')}`
    this.isUserLoggedIn()
  }

  isUserLoggedIn() {
    this.isNotUserExists = true;
    this.isNotLoggedIn = true;
  }



}
