import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceClienteService } from '../../Service/service-cliente.service';
import { Cliente } from 'src/app/Modelo/Cliente';


@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  clientes:Cliente[];
  constructor(private serviceCliente:ServiceClienteService, private router:Router) { }

  ngOnInit() {
    this.serviceCliente.getClientes()
    .subscribe(data=>{
      this.clientes=data;
    })
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
