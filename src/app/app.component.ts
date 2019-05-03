import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba01';

  constructor(private router:Router){}

  Listarcliente(){
    this.router.navigate(["listar-cliente"]);
  }
 Listartarjeta(){
    this.router.navigate(["listar-tarjeta"]);
  }
   Listarconsumo(){
    this.router.navigate(["listar-consumo"]);
  }
  Listarasesor(){
    this.router.navigate(["listar-asesor"]);
  }
  agregar(){
    this.router.navigate(["add-cliente"]);
  }
}
