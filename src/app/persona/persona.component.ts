import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonaService } from './persona.service';

@Component({
  selector: 'persona',
  templateUrl: './persona.component.html',
  providers: [PersonaService]
})
export class PersonaComponent implements OnInit {
  private persona: Persona = null;

  constructor (private persona_service: PersonaService) {
    // this.persona = new Persona ('Rossi', 1.70, 56);
    // this.persona = this.persona_service.getPersonaInicial();
  }


  public ngOnInit() {
    console.log('El elemento se ha iniciado');
    // this.persona_service.getPersonaInicialAsync().subscribe((p) => this.persona = p);
    this.persona_service.getPersonaInicialHttpReal().subscribe((p) => this.persona = p);
  }
  public esVisible (): boolean {
    return false;
  }
  public mostrarPersona(persona: Persona) {
    console.log('Nombre = ' + persona.nombre);
  }
}
