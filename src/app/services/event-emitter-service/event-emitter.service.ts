import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeLogginedInEvent = new EventEmitter();
  invokeCurrentUser = new EventEmitter();
  subsLogin? : Subscription = undefined


  constructor() { }

  onInvokeNavUserComponentCurrentUser() {
    this.invokeCurrentUser.emit();
  }

  onInvokeNavUserComponentLogginedIn() {
    this.invokeLogginedInEvent.emit();
  }
}
