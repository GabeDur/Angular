import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//1-importar animaciones
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent
  ],
  imports: [
    BrowserModule,
	//1-importar animaciones
	BrowserAnimationsModule,
	MaterialModule,
	AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
