import { Component, OnInit } from '@angular/core';
import { ServiceConsumoService } from 'src/app/Service/service-consumo.service';
import { Router } from '@angular/router';
import { Consumo } from 'src/app/Modelo/Consumo';


@Component({
  selector: 'app-add-consumo',
  templateUrl: './add-consumo.component.html',
  styleUrls: ['./add-consumo.component.css']
})
export class AddConsumoComponent implements OnInit {
  
  consumo :Consumo = new Consumo();
  constructor(private router:Router, private serviceConsumo:ServiceConsumoService) { }

  ngOnInit() {
  }

  Guardar(consumo:Consumo) {
    alert(consumo);
    this.serviceConsumo.createConsumo(consumo)
    .subscribe(data=>{
      this.consumo=data;
    alert("Consumo adicionado");
    this.router.navigate(["listar-consumo"]);
    })
  }



}
