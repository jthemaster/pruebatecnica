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

  Listar(){
    this.router.navigate(["listar-cliente"]);
  }
  agregar(){
    this.router.navigate(["add-cliente"]);
  }
}
