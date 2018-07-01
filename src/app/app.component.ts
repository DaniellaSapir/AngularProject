//app.component.ts is kind of "buisiness logic" of the app
//component decorator comes from core pkg
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  // templateUrl: '../index.html',
  // relative to ts file that calls it. Why with index crashes???
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
