import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
	MatToolbarModule,
	MatButtonModule,
	MatIconModule
  ],
  exports:[
	EncabezadoComponent,
	MatToolbarModule,
	MatButtonModule,
	MatIconModule
  ],
  declarations: [EncabezadoComponent]
})

export class MaterialModule { }
