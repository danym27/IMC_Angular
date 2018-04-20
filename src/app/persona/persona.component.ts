import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'persona',
  templateUrl: './persona.component.html',
})
export class PersonaComponent implements OnInit {
  private persona: Persona;

  constructor () {
    this.persona = new Persona ('Rossi', 1.70, 56);

  }

  public ngOnInit() {
    console.log('El elemento se ha iniciado');
  }
  public esVisible (): boolean {
    return false;
  }
  public mostrarPersona(persona: Persona) {
    console.log('Nombre = ' + persona.nombre);
  }
}
