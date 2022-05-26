import { Injectable } from '@angular/core';
import { WebSocketService } from './web-socket.service';
import {map, Observable, Subject} from 'rxjs';
import { Question } from '../models/Question';
import { SOCKET_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class QuestionSocketService {

  idGame: string = "c5f7fd7e-b847-4aca-a75c-0b22d09fc36d";

  public question?: Subject<Question>

  constructor(
    private webSocketService: WebSocketService
  ) { 
    console.log(`${SOCKET_URL}/${this.idGame}`);
    this.question = <Subject<Question>> webSocketService
        .connect(`${SOCKET_URL}/${this.idGame}`)
        .pipe(
          map(
            (response: MessageEvent): Question => {
              console.log('question jeeeet');
            let data = JSON.parse(response.data);
            return data;
          }
          )
        );
  }
}
