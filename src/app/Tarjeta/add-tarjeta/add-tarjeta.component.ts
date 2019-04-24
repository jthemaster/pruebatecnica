import { Component, OnInit } from '@angular/core';
import { ServiceTarjetaService } from 'src/app/Service/service-tarjeta.service';
import { Router } from '@angular/router';
import { Tarjeta } from 'src/app/Modelo/Tarjeta';


@Component({
  selector: 'app-add-tarjeta',
  templateUrl: './add-tarjeta.component.html',
  styleUrls: ['./add-tarjeta.component.css']
})
export class AddTarjetaComponent implements OnInit {
  
  tarjeta :Tarjeta = new Tarjeta();
  constructor(private router:Router, private serviceTarjeta:ServiceTarjetaService) { }

  ngOnInit() {
  }

  Guardar(tarjeta:Tarjeta) {
    alert(tarjeta);
    this.serviceTarjeta.createTarjeta(tarjeta)
    .subscribe(data=>{
      this.tarjeta=data;
    alert("Tarjeta adicionado");
    this.router.navigate(["listar-tarjeta"]);
    })
  }



}
