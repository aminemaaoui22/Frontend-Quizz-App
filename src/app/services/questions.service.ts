import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../app.constants';
import { QuestionAnswer } from '../models/QuestionAnswer';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(
    private http: HttpClient
  ) { }

  checkAnswer(val: string): Observable<QuestionAnswer> {
    return this.http.get<QuestionAnswer>(`${API_URL}/quizz/answer?value=${val}`, { withCredentials : true });
  }
}
