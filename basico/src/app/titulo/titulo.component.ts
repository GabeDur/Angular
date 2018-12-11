import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  generarNumero():String{
	return Math.floor(Math.random()*255).toString(16);
  }
  
  generarColor():String{
	return "#"+this.generarNumero()+this.generarNumero()+this.generarNumero();
  }

}
