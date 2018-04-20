import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { ImcComponent } from './imc/imc.component';
import { ImcPipe } from './imc/imc.pipe';


@NgModule({
  declarations: [ // Componentes, Directivas, Pipes
    AppComponent,
    PersonaComponent,
    ImcComponent,
    ImcPipe,
  ],
  imports: [// Modulos
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [], // Servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
