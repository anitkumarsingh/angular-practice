import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  allowNewServer = false;  
  serverCreationStatus ='No server was created';
  serverName:string ='';
  constructor() { 
    setTimeout(() => {
      this.allowNewServer =true
     }, 2000);
  }

  ngOnInit(): void {
  }

  onServerCreation () {
   this.serverCreationStatus ='Server is created with Name' +' '   + this.serverName + ' server';
  }
  onUpdateServer(event:Event){
    this.serverName =(<HTMLInputElement> event.target).value
  }
}
