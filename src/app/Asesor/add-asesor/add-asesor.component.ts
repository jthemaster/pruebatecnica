import { Component, OnInit } from '@angular/core';
import { ServiceAsesorService } from 'src/app/Service/service-asesor.service';
import { Router } from '@angular/router';
import { Asesor } from 'src/app/Modelo/Asesor';


@Component({
  selector: 'app-add-asesor',
  templateUrl: './add-asesor.component.html',
  styleUrls: ['./add-asesor.component.css']
})
export class AddAsesorComponent implements OnInit {
  
  asesor :Asesor = new Asesor();
  constructor(private router:Router, private serviceAsesor:ServiceAsesorService) { }

  ngOnInit() {
  }

  Guardar(asesor:Asesor) {
    alert(asesor);
    this.serviceAsesor.createAsesor(asesor)
    .subscribe(data=>{
      this.asesor=data;
    alert("Asesor adicionado");
    this.router.navigate(["listar-asesor"]);
    })
  }



}
