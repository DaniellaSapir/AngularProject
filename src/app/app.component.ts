//app.component.ts is kind of "buisiness logic" of the app
//component decorator comes from core pkg
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  // templateUrl: '../index.html',
  // relative to ts file that calls it. Why with index crashes???
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles:[`
    h3 {
      color: dodgerblue;
    }
    h2 {
      color: lightgreen;
    }
    .registration {
      background-color: lightpink;
      height:500px;
    }
    .type {
      margin:7px;
    }
    .container {
      // margin-left:10px;
      // margin-right:10px;
    }
    .about {
      background-color: rgb(244, 66, 200, 0.3);
      height:500px;
      padding:30px;
    }
    .prods {
      background-color:rgb(211, 244, 65, 0.3);
      height:500px;
    }
  `]
  // this selector is targeting custom tag in the index named <app>
// @Component({
  // selector: 'app',
  //template property fills the innerHTML of the targeted  custom element
//   template: "<h1>Daniella's App</h1>"
})
export class AppComponent {
  // title = "Daniella's app. Does it work??";
  // name = '';
  //if we want to use our index file, we need to state in above templateURL
}
