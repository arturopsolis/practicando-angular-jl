import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.scss']
})
export class MiComponenteComponent {

  frutas = ["manzana", "pera", "mango"];
  nombre = "Mi Tienda de Frutas";
  personas = [
    {
      nombre: "Pablo",
      edad: 30,
    },
    {
      nombre: "Pedro",
      edad: 20,
    },
    {
      nombre: "Luis",
      edad: 34,
    },

    {
      nombre: "Jose",
      edad: 17,
    },

  ]

  error = false;

  limiteDeEdad = 18;

  evaluaEdad(edad:number): string{
    if( edad < this.limiteDeEdad){
      return "menor";
    }else{
      return "mayor"
    }
  }

  errorSwitch(): void{
    if(this.error === false){
      this.error = true;
    }else{
      this.error = false;
    }
  }


}


