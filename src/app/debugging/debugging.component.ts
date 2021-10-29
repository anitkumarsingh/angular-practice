import {Component} from '@angular/core';

@Component({
  selector:'app-debugging',
  templateUrl:'./debugging.component.html',
  styleUrls:['./debugging.component.css']
})

export class DebuggingComponent{
  servers = [];

  addNewServer(){
    this.servers.push('Server Added')
  }
  removeServer(id){
    if(this.servers.length <= 1){
      this.servers.splice(0,1);
    }else{
      let position = id + 1;
      this.servers.splice(position,1);
    }
  }
}