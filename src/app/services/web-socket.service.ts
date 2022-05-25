import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  socket: any;

  constructor() { 

 //   this.socket = io()
  }

  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data: any) => {
        subscriber.next(data)
      })
    });
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }
}
