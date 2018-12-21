import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../shared/model/estudiante';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
	
	estudiante1: Estudiante;
	
  constructor() { }

  ngOnInit() {
	console.log("Inicializando el componente lists");
	this.estudiante1={
		id : 1,
		nombre: 'Hilda Becerro',
		ciudad: 'México'
	};
  }

}
