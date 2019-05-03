import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ListarComponent } from './Cliente/listar/listar.component';
//import { EditComponent } from  './Cliente/edit/edit.component';
//import { AddComponent } from  './Cliente/add/add.component';
import { ListarClienteComponent } from './Cliente/listar-cliente/listar-cliente.component';
import { EditClienteComponent } from  './Cliente/edit-cliente/edit-cliente.component';
import { AddClienteComponent } from  './Cliente/add-cliente/add-cliente.component';

import { ListarTarjetaComponent } from './Tarjeta/listar-tarjeta/listar-tarjeta.component';
import { EditTarjetaComponent } from  './Tarjeta/edit-tarjeta/edit-tarjeta.component';
import { AddTarjetaComponent } from  './Tarjeta/add-tarjeta/add-tarjeta.component';

import { ListarAsesorComponent } from './Asesor/listar-asesor/listar-asesor.component';
import { EditAsesorComponent } from  './Asesor/edit-asesor/edit-asesor.component';
import { AddAsesorComponent } from  './Asesor/add-asesor/add-asesor.component';

import { ListarConsumoComponent } from './Consumo/listar-consumo/listar-consumo.component';
import { EditConsumoComponent } from  './Consumo/edit-consumo/edit-consumo.component';
import { AddConsumoComponent } from  './Consumo/add-consumo/add-consumo.component';


const routes: Routes = [
  {path:'listar-cliente',component:ListarClienteComponent},
  {path:'add-cliente',component:AddClienteComponent},
  {path:'edit-cliente',component:EditClienteComponent},

  {path:'listar-tarjeta',component:ListarTarjetaComponent},
  {path:'add-tarjeta',component:AddTarjetaComponent},
  {path:'edit-tarjeta',component:EditTarjetaComponent},

  {path:'listar-consumo',component:ListarConsumoComponent},
  {path:'add-consumo',component:AddConsumoComponent},
  {path:'edit-consumo',component:EditConsumoComponent},

  {path:'listar-asesor',component:ListarAsesorComponent},
  {path:'add-asesor',component:AddAsesorComponent},
  {path:'edit-asesor',component:EditAsesorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
