import { Component, OnInit } from '@angular/core';

@Component({
  //It's also possible for the selector to be not the html element itself, but 
  //an attribute of an html element (like href). we set it like in css in []
  // selector: '[app-servers]',
  // selector: 'app-servers',
  //another way is by class
  selector:'.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
