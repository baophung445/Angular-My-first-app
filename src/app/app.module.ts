
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { DirectiveComponent } from './directive/directive.component'


@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    DirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
