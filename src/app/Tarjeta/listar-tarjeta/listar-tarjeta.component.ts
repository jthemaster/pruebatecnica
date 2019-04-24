import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceTarjetaService } from '../../Service/service-tarjeta.service';
import { Tarjeta } from 'src/app/Modelo/Tarjeta';


@Component({
  selector: 'app-listar-tarjeta',
  templateUrl: './listar-tarjeta.component.html',
  styleUrls: ['./listar-tarjeta.component.css']
})
export class ListarTarjetaComponent implements OnInit {

  tarjetas:Tarjeta[];
  constructor(private serviceTarjeta:ServiceTarjetaService, private router:Router) { }

  ngOnInit() {
    this.serviceTarjeta.getTarjetas()
    .subscribe(data=>{
      this.tarjetas=data;
    })
  }
  Editar(tarjeta:Tarjeta):void{
    localStorage.setItem("id",tarjeta.id.toString());
    this.router.navigate(["edit-tarjeta"]);

  }

  Delete(tarjeta:Tarjeta):void{
    this.serviceTarjeta.deleteTarjeta(tarjeta) 
    .subscribe(data=>{
      this.tarjetas=this.tarjetas.filter(c=>c!==tarjeta);
      alert("Usuario Eliminado");
    })

  }


}
