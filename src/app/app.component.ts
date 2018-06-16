import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Sciammarella Dolci & Torte';
  innerHeight: any;
  message;

  constructor(){
    this.innerHeight = window.innerHeight;
  }

  ngOnInit(){
    
  }
}
