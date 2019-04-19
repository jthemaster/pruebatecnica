import { Component, OnInit } from '@angular/core';
import { ServiceClienteService } from 'src/app/Service/service-cliente.service';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/Cliente';


@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {
  
  cliente :Cliente = new Cliente();
  constructor(private router:Router, private serviceCliente:ServiceClienteService) { }

  ngOnInit() {
  }

  Guardar(cliente:Cliente) {
    alert(cliente);
    this.serviceCliente.createCliente(cliente)
    .subscribe(data=>{
      this.cliente=data;
    alert("Cliente adicionado");
    this.router.navigate(["listar-cliente"]);
    })
  }



}
