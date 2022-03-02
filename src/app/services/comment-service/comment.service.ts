import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionCommentReadDto } from 'src/app/models/dtos/question-comment-read-dto';
import { QuestionComment } from 'src/app/models/question-comment';
import { ListResponseModel } from 'src/app/utilities/responseModel/listResponseModel';
import { SingleResponseModel } from 'src/app/utilities/responseModel/singleResponseModel';
import { API_URL_QUESTION_COMMENT } from '../url.constants';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient : HttpClient) { }

  add(comment : QuestionComment) : Observable<SingleResponseModel<QuestionComment>> {
    return this.httpClient.post<SingleResponseModel<QuestionComment>>(`${API_URL_QUESTION_COMMENT}/`, comment)
  }

  getCommentsByQuestionId(questionId : number) : Observable<ListResponseModel<QuestionCommentReadDto>> {
    return this.httpClient.get<ListResponseModel<QuestionCommentReadDto>>(`${API_URL_QUESTION_COMMENT}/getQuestionDetailsByQuestionId/${questionId}`)
  }
}
