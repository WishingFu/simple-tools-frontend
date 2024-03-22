import { Injectable } from '@angular/core';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';
import { FileEvent } from './common';

@Injectable({
  providedIn: 'root'
})
export class FileWebsocketService {

  ws: WebSocketSubject<FileEvent>;

  // constructor() {
  //   this.tryConnect();
  // }
  
  // tryConnect() {
  //   this.ws = new WebSocket('ws://192.168.100.102:8080/ws/file-share');

  //   this.ws.onopen = (event: Event) => this.onOpen(event);
  //   this.ws.onmessage = (event: MessageEvent) => this.onOpen(event);
  //   this.ws.onerror = (event: Event) => this.onError(event);
  //   // this.ws.onclose = (event: CloseEvent) => this.tryConnect();
  // }

  // onOpen(event: Event) {
  //   console.log(event);
  // }

  // onMessage(event: MessageEvent) {
  //   console.log(event.data);
  // }

  // onError(event: Event) {
  //   console.log(event);
  // }


  // ws: WebSocketSubject<FileEvent>;

  constructor() {
    this.ws = webSocket('ws://192.168.100.102:8080/ws/file-share');

    this.ws.subscribe(
      this.handleMsg,
    );
  }

  handleMsg(msg: FileEvent) {
    console.log(msg);
  }
}
