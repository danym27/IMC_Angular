import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'imc-persona',
  templateUrl: './imc.component.html',
})
export class ImcComponent implements OnInit, OnChanges {

  @Input() peso: number;
  @Input() altura: number;

  public imc: number;

  constructor () {
  }
  ngOnInit() {
    console.log('Init IMC');
    this.informar();
    this.calcularIMC();
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
  }
}
