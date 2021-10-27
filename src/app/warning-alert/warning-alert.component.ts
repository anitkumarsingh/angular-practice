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
  serverStatus ='Offline';
  username =''
  onUserNameUpdate(){
    this.username =''
  }
}