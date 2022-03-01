import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionCreateDto } from 'src/app/models/dtos/question-create-dto';
import { QuestionReadDto } from 'src/app/models/dtos/question-read-dto';
import { Question } from 'src/app/models/question';
import { ListResponseModel } from 'src/app/utilities/responseModel/listResponseModel';
import { SingleResponseModel } from 'src/app/utilities/responseModel/singleResponseModel';
import {  API_URL_QUESTION } from '../url.constants';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient: HttpClient) { }

  add(questionCreateDto: FormData) : Observable<SingleResponseModel<Question>> {
    return this.httpClient.post<SingleResponseModel<Question>>(`${API_URL_QUESTION}/`, questionCreateDto);
  }

  getAll() : Observable<ListResponseModel<QuestionReadDto>> {
    return this.httpClient.get<ListResponseModel<QuestionReadDto>>(`${API_URL_QUESTION}/getAllQuestionsDetail`);
  }





}
