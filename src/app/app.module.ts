import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearhComponent } from './searh/searh.component';

@NgModule({
  declarations: [
    AppComponent,
    SearhComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
