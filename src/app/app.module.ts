import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// no need to add the .ts as it adds automatically. relative to root - app/
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { Page2Component } from './page2/page2.component';
import { RegistrStep1Component } from './registr-step1/registr-step1.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    NavbarComponent,
    RegistrationComponent,
    RegFormComponent,
    Page2Component,
    RegistrStep1Component
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
//the AppModule class on its page so we need to export it as well
export class AppModule { }
