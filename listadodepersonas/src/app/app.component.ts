import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listadodepersonas';
  //arraylist
  personas: Persona[] = [new Persona("Ignacio",44)];
  nombreInput:string;
  edadInput:number;

  onAgregarPersona(){
    let personaAux = new Persona(this.nombreInput, this.edadInput);
    this.personas.push(personaAux);
  }

}
