import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookcomponentComponent } from './bookcomponent/bookcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    BookcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
