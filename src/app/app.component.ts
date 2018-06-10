import { Component, OnInit } from '@angular/core';
import { MessagingService } from './messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Sciammarella Dolci & Torte';
  innerHeight: any;
  message;

  constructor(private msgService : MessagingService){
    this.innerHeight = window.innerHeight;
  }

  ngOnInit(){
    this.msgService.getPermission()
    this.msgService.receiveMessage()
    this.message = this.msgService.currentMessage;
  }
}
