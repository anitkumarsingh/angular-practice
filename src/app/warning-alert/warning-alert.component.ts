import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls:['../warning-alert/warning-alert.component.css']
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