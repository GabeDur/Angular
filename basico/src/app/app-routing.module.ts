import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { EncabezadoComponent } from './material/encabezado/encabezado.component';

const routes: Routes = [
	{
		path: 'hola', component: EncabezadoComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
