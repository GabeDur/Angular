import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'dados';
  valor1:number;
  valor2:number;
  valor3:number;
  resultado:string;
  
  constructor(){
	this.valor1=0;
	this.valor2=0;
	this.valor3=0;
	
  }
  
  aleatorio(){
	return Math.trunc((Math.random()*6)+1);
  }
  
  Tirar(){
	this.valor1=this.aleatorio();
	this.valor2=this.aleatorio();
	this.valor3=this.aleatorio();
	if(this.valor1==this.valor2 && this.valor1==this.valor3){
		this.resultado="Gano";
	}else{
		this.resultado="Perdio";
	}
  }
  
}
