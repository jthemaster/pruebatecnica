import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceTarjetaService } from 'src/app/Service/service-tarjeta.service';
import { Tarjeta } from 'src/app/Modelo/Tarjeta';

@Component({
  selector: 'app-edit-tarjeta',
  templateUrl: './edit-tarjeta.component.html',
  styleUrls: ['./edit-tarjeta.component.css']
})
export class EditTarjetaComponent implements OnInit {

  tarjeta :Tarjeta = new Tarjeta();
  constructor(private router:Router,private serviceTarjeta:ServiceTarjetaService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.serviceTarjeta.getTarjetaId(+id)
    .subscribe(data=>{
      this.tarjeta=data;
    })
  }
  Actualizar(tarjeta:Tarjeta){
    this.serviceTarjeta.updateTarjeta(tarjeta)
    .subscribe(data=>{
      this.tarjeta=data;
      alert("Se actualizo correctamente");
      this.router.navigate(["listar-tarjeta"]);
    })

  }
}
