import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import * as Rx  from 'rxjs';
import { SOCKET_URL } from '../app.constants';
import { Question } from '../models/Question';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {


  gameId!: string;

  constructor() {}

  private subject?: Rx.Subject<MessageEvent>;

  public connect(url: string): AnonymousSubject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log(`Successfully connected!  ${url}`);
    }
    return this.subject;
  }

  public create(url: string): AnonymousSubject<MessageEvent>  {
    console.log(`url =  ${url}`)
    let ws = new WebSocket(url);
    let observable = new Observable(
      (obs: Rx.Observer<MessageEvent>) => {
        ws.onmessage = obs.next.bind(obs);
        ws.onerror = obs.error.bind(obs);
        ws.onclose = obs.complete.bind(obs);
        return ws.close.bind(ws);
      }
    );
    let observer = {
      error: () => {console.log('error')},
      complete: () => {},
      next: (data: Object) => {
        if(ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      }
    };
    return new AnonymousSubject<MessageEvent>(observer, observable);
  }
  

}
