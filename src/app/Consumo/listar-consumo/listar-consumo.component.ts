import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceConsumoService } from '../../Service/service-consumo.service';
import { Consumo } from 'src/app/Modelo/Consumo';


@Component({
  selector: 'app-listar-consumo',
  templateUrl: './listar-consumo.component.html',
  styleUrls: ['./listar-consumo.component.css']
})
export class ListarConsumoComponent implements OnInit {

  consumos:Consumo[];
  constructor(private serviceConsumo:ServiceConsumoService, private router:Router) { }

  ngOnInit() {
    this.serviceConsumo.getConsumos()
    .subscribe(data=>{
      this.consumos=data;
    })
  }
  Editar(consumo:Consumo):void{
    localStorage.setItem("id",consumo.id.toString());
    this.router.navigate(["edit-consumo"]);

  }

  Delete(consumo:Consumo):void{
    this.serviceConsumo.deleteConsumo(consumo) 
    .subscribe(data=>{
      this.consumos=this.consumos.filter(c=>c!==consumo);
      alert("Usuario Eliminado");
    })

  }


}
