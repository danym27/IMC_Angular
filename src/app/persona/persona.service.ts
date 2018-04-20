import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PersonaService {
    static readonly url_get = 'http://192.168.3.10:9080/angular/GetPersona';

    constructor (private http: HttpClient) {

    }

    getPersonaInicialAsync(): Observable<Persona> {
        let persona: Persona;
        persona = new Persona ('Juan', 1.5, 60);
        return of (persona);
    }

    getPersonaInicialHttpReal(): Observable<Persona> {
        let persona: Observable<Persona>;
        persona = this.http.get<Persona>(PersonaService.url_get);
        return persona;
    }

    getPersonaInicial(): Persona {
        let persona: Persona;
        persona = new Persona ('Juan', 1.5, 60);
        return persona;
    }
}
