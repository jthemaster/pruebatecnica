import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceClienteService } from 'src/app/Service/service-cliente.service';
import { Cliente } from 'src/app/Modelo/Cliente';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {

  cliente :Cliente = new Cliente();
  constructor(private router:Router,private serviceCliente:ServiceClienteService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.serviceCliente.getClienteId(+id)
    .subscribe(data=>{
      this.cliente=data;
    })
  }
  Actualizar(cliente:Cliente){
    this.serviceCliente.updateCliente(cliente)
    .subscribe(data=>{
      this.cliente=data;
      alert("Se actualizo correctamente");
      this.router.navigate(["listar-cliente"]);
    })

  }
}
