import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  getUserId() : number {
     if(localStorage.getItem("userId")){
        return parseInt(localStorage.getItem("userId")!)
     }
    
     return 0;
  }
  
}
