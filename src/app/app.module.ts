import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BigBlueButtonComponent } from './components/big-blue-button/big-blue-button.component';
import { TabelleComponent } from './components/tabelle/tabelle.component';
import { MediumGreenButtonComponent } from './components/medium-green-button/medium-green-button.component';

@NgModule({
  declarations: [
    AppComponent,
    BigBlueButtonComponent,
    TabelleComponent,
    MediumGreenButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
