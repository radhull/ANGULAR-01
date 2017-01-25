import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { AppDetalleComponent } from './app.component.detalle';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AppDetalleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
