import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BigBlueButtonComponent } from './components/big-blue-button/big-blue-button.component';

@NgModule({
  declarations: [
    AppComponent,
    BigBlueButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
