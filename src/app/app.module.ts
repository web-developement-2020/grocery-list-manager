import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';

import { GroceryComponent } from './app.grocery';
@NgModule({
  declarations: [
GroceryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [GroceryComponent],

})
export class AppModule { }
