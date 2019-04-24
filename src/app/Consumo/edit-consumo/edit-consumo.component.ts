import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceConsumoService } from 'src/app/Service/service-consumo.service';
import { Consumo } from 'src/app/Modelo/Consumo';

@Component({
  selector: 'app-edit-consumo',
  templateUrl: './edit-consumo.component.html',
  styleUrls: ['./edit-consumo.component.css']
})
export class EditConsumoComponent implements OnInit {

  consumo :Consumo = new Consumo();
  constructor(private router:Router,private serviceConsumo:ServiceConsumoService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.serviceConsumo.getConsumoId(+id)
    .subscribe(data=>{
      this.consumo=data;
    })
  }
  Actualizar(consumo:Consumo){
    this.serviceConsumo.updateConsumo(consumo)
    .subscribe(data=>{
      this.consumo=data;
      alert("Se actualizo correctamente");
      this.router.navigate(["listar-consumo"]);
    })

  }
}
