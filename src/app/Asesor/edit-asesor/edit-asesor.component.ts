import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAsesorService } from 'src/app/Service/service-asesor.service';
import { Asesor } from 'src/app/Modelo/Asesor';

@Component({
  selector: 'app-edit-asesor',
  templateUrl: './edit-asesor.component.html',
  styleUrls: ['./edit-asesor.component.css']
})
export class EditAsesorComponent implements OnInit {

  asesor :Asesor = new Asesor();
  constructor(private router:Router,private serviceAsesor:ServiceAsesorService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.serviceAsesor.getAsesorId(+id)
    .subscribe(data=>{
      this.asesor=data;
    })
  }
  Actualizar(asesor:Asesor){
    this.serviceAsesor.updateAsesor(asesor)
    .subscribe(data=>{
      this.asesor=data;
      alert("Se actualizo correctamente");
      this.router.navigate(["listar-asesor"]);
    })

  }
}
