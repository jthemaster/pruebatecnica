import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAsesorService } from '../../Service/service-asesor.service';
import { Asesor } from 'src/app/Modelo/Asesor';


@Component({
  selector: 'app-listar-asesor',
  templateUrl: './listar-asesor.component.html',
  styleUrls: ['./listar-asesor.component.css']
})
export class ListarAsesorComponent implements OnInit {

  asesores:Asesor[];
  constructor(private serviceAsesor:ServiceAsesorService, private router:Router) { }

  ngOnInit() {
    this.serviceAsesor.getAsesores()
    .subscribe(data=>{
      this.asesores=data;
    })
  }
  Editar(asesor:Asesor):void{
    localStorage.setItem("id",asesor.id.toString());
    this.router.navigate(["edit-asesor"]);

  }

  Delete(asesor:Asesor):void{
    this.serviceAsesor.deleteAsesor(asesor) 
    .subscribe(data=>{
      this.asesores=this.asesores.filter(c=>c!==asesor);
      alert("Usuario Eliminado");
    })

  }


}
