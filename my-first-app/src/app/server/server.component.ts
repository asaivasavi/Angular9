import { Component } from '@angular/core';
@Component({
    //selector: '[app-server]', // attribute
    //selector: '.app-server', //class 
    selector : 'app-server',
    templateUrl : './server.component.html'
})

export class ServerComponent{
    serverId= 10;
    serverStatus= 'offline';
    
    constructor(){
        this.serverStatus= Math.random() > 0.5 ? 'online' : 'offline';
    }
    getServerStatus(){
        return this.serverStatus;
    }
    getBackgroundColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
