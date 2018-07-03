import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    // relative path to the .ts file which is ./ though under thr same folder
    //here in templateconfirmed
    //if we have a small component (no more than 3 lines html) we can insert, as following:
    //template : <html code here>,
    templateUrl: './server.component.html',
    //style as well, can be inserted here if not much
})

export class ServerComponent {

}
