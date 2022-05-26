import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../services/web-socket.service';
import {map, Observable, Subject} from 'rxjs';
import { Question } from '../models/Question';
import { SOCKET_URL } from '../app.constants';

@Component({
  selector: 'app-questions-socket',
  templateUrl: './questions-socket.component.html',
  styleUrls: ['./questions-socket.component.css']
})
export class QuestionsSocketComponent implements OnInit {

  idGame: string = "276b171b-ff47-42af-ba71-4a5d7f8be49f";

  public question?: Subject<Question>

  constructor(
    private webSocketService: WebSocketService
  ) { 
    this.question = <Subject<Question>> webSocketService
        .connect(`${SOCKET_URL}/${this.idGame}`)
        .pipe(
          map(
            (response: MessageEvent): Question => {
            let data = JSON.parse(response.data);
            return data;
          }
          )
        );
  }

  ngOnInit(): void {
  }

}
