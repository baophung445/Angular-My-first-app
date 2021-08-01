import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: '<app-server> </app-server>',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  stringOld = 'Old Server';
  serverName = 'Test Server Name';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    },2000)  
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.stringOld = 'New Server ' + this.serverName
  }

  onUpdateServerName(event : any){
    console.log(event.target.value)
    // this.serverName= (<HTMLInputElement>event.target).value;
    this.serverName = event.target.value
  }

}
