import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styles: [`
  .warning{
    color:red;
    border:red;
    background-color:rgba(5,255,255,0.6);
  }
  `]
})

export class WarningAlertComponent {
  serverId = 10;
  serverStatus ='';
  username =''
  onUserNameUpdate(){
    this.username =''
  }
  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online':'offline';
   
  }
  getColor(){
    return this.serverStatus === 'online' ?  'green':'red';
  }
}