import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer='false';
  serverCreationStatus="No Server was created."
  serverName='test server';
  serverCreated=false;
  //servers=['Test server 01', 'Test server 02'];
  servers=[];

  constructor() {
    setTimeout(() =>{
      this.allowNewServer='true';
    },1);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus="Server was created!!";
  }

  onUpdateServerName(event : Event){
    
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}
