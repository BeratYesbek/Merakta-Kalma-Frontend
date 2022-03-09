import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccessToken } from 'src/app/models/access-token';
import { UserCreateDto } from 'src/app/models/dtos/user-create-dto';
import { UserLoginDto } from 'src/app/models/dtos/user-login-dto';
import { SingleResponseModel } from 'src/app/utilities/responseModel/singleResponseModel';
import { API_URL_AUTH } from '../url.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  register(userCreateDto: UserCreateDto): Observable<SingleResponseModel<AccessToken>> {
    return this.httpClient.post<SingleResponseModel<AccessToken>>(`${API_URL_AUTH}/register`, userCreateDto);
  }

  login(userLoginDto : UserLoginDto) : Observable<SingleResponseModel<AccessToken>>{
    return this.httpClient.post<SingleResponseModel<AccessToken>>(`${API_URL_AUTH}/login`, userLoginDto);
  }

  isAuthenticated() : boolean{
    if(localStorage.getItem("token") && localStorage.getItem("userId")){
      return true 
    }
    return false
  }

}
