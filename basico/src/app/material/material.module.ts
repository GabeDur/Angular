import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { MatToolbarModule, 
			MatButtonModule, 
			MatIconModule, 
			MatExpansionModule,
			MatInputModule
			} from '@angular/material';
import { BotonesComponent } from './botones/botones.component';
import { InpFieldsComponent } from './inp-fields/inp-fields.component';


@NgModule({
  imports: [
    CommonModule,
	MatToolbarModule,
	MatButtonModule,
	MatIconModule,
	MatExpansionModule,
	MatInputModule
  ],
  exports:[
	EncabezadoComponent,
	MatToolbarModule,
	MatButtonModule,
	MatIconModule,
	BotonesComponent
  ],
  declarations: [EncabezadoComponent, BotonesComponent, InpFieldsComponent]
})

export class MaterialModule { }
