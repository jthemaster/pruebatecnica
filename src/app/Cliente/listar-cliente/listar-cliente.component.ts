import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceClienteService } from '../../Service/service-cliente.service';
import { Cliente } from 'src/app/Modelo/Cliente';

import { ServiceTarjetaService } from '../../Service/service-tarjeta.service';
import { Tarjeta } from 'src/app/Modelo/Tarjeta';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  clientes:Cliente[];
  tarjetas:Tarjeta[];
  constructor(private serviceCliente:ServiceClienteService,
    private serviceTarjeta:ServiceTarjetaService, private router:Router) { }

  ngOnInit() {
    this.serviceCliente.getClientes()
    .subscribe(data=>{
      this.clientes=data;
    });

   /* this.serviceTarjeta.getTarjetas()
    .subscribe(data=>{
      this.tarjetas=data;
    });*/
  }

  Listartarjeta(cliente:Cliente){
    localStorage.setItem("cliente_id",cliente.id.toString());
    this.router.navigate(["listar-tarjeta"]);
  }
  
  Editar(cliente:Cliente):void{
    localStorage.setItem("id",cliente.id.toString());
    this.router.navigate(["edit-cliente"]);
  }



  Delete(cliente:Cliente):void{
    this.serviceCliente.deleteCliente(cliente) 
    .subscribe(data=>{
      this.clientes=this.clientes.filter(c=>c!==cliente);
      alert("Usuario Eliminado");
    })

  }


}
