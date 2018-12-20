import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { EncabezadoComponent } from './material/encabezado/encabezado.component';
import  { HomeComponent } from './home/home.component';
import  { BotonesComponent } from './material/botones/botones.component';

const routes: Routes = [
	{
		path: 'botones', 
		component: EncabezadoComponent
	}
	{
		path: 'home', 
		component: HomeComponent
	}
	{
		//path: '', component: HomeComponent
		path: '', 
		redirectTo: 'home',
		pathMatch: 'full'
	}
	{
		path: 'botones', 
		component: BotonesComponent
	}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
