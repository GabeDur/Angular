import { Component } from '@angular/core';

@Component({
	selector: 'calc',
	templateUrl: 'calc.component.html',
	styleUrls: ['calc.component.css']
})

export class CalcComponent{
	public number1: number;
	public number2: number;
	public resultado: number;
	
	constructor(){
		this.number1=0;
		this.number2=0;
	}
	
	public suma(){
		this.resultado = this.number1+this.number2;
	}
	public resta(){
		this.resultado = this.number1-this.number2;
	}
	public multiplica(){
		this.resultado = this.number1*this.number2;
	}
}