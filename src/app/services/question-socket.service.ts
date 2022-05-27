import { Injectable } from '@angular/core';
import { WebSocketService } from './web-socket.service';
import {map, Observable, Subject} from 'rxjs';
import { Question } from '../models/Question';
import { SOCKET_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class QuestionSocketService {

  idGame!: string;

  public question?: Subject<Question>

  constructor(
    private webSocketService: WebSocketService
  ) { 
    console.log(` socket url = ${SOCKET_URL}`);
    this.question = <Subject<Question>> webSocketService
        .connect(`${SOCKET_URL}`)
        .pipe(
          map(
            (response: MessageEvent): Question => {
            let data = JSON.parse(response.data);
            return data;
          }
          )
        );
  }
}
