import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  allowNewServer = false;  
  constructor() { 
    setTimeout(() => {
      this.allowNewServer =true
     }, 2000);
  }

  ngOnInit(): void {
  }

}
