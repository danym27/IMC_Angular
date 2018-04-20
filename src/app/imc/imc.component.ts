import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { TipoImc } from './imc.model';

@Component({
  selector: 'imc-persona',
  templateUrl: './imc.component.html',
})
export class ImcComponent implements OnInit, OnChanges {

  @Input() peso: number;
  @Input() altura: number;

  public imc: number;
  tipoIMC: any;
  tipo = TipoImc;

  constructor() {
  }
  ngOnInit() {
    console.log('Init IMC');
    this.informar();
    this.calcularIMC();
    console.log(this.tipo);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.peso) {
      console.log('Peso Modificado' + changes.peso.currentValue);
      console.log('Peso Anterior' + changes.peso.previousValue);
    }
    console.log('Changes Imc');
    this.informar();
    this.calcularIMC();
  }
  informar(): void {
    console.log('PESO ' + this.peso);
    console.log('ALTURA ' + this.altura);
  }
  calcularIMC(): void {
    this.imc = this.peso / (this.altura * this.altura);
    if (this.imc < 16) {
      this.tipoIMC = this.tipo.desnutrido;
    } else if (this.imc >= 16 && this.imc < 18) {
      this.tipoIMC = TipoImc.delgado;
    } else if (this.imc >= 18 && this.imc < 25) {
      this.tipoIMC = this.tipo.normal;
    } else if (this.imc >= 25 && this.imc < 31) {
      this.tipoIMC = this.tipo.sobrepeso;
    } else if (this.imc >= 31) {
      this.tipoIMC = this.tipo.obeso;
    }
  }
}
