import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ListarComponent } from './Cliente/listar/listar.component';
//import { EditComponent } from  './Cliente/edit/edit.component';
//import { AddComponent } from  './Cliente/add/add.component';
import { ListarClienteComponent } from './Cliente/listar-cliente/listar-cliente.component';
import { EditClienteComponent } from  './Cliente/edit-cliente/edit-cliente.component';
import { AddClienteComponent } from  './Cliente/add-cliente/add-cliente.component';
/*
import { ListarTarjetaComponent } from './Cliente/listar-tarjeta/listar-tarjeta.component';
import { EditTarjetaComponent } from  './Cliente/edit-tarjeta/edit-tarjeta.component';
import { AddTarjetaComponent } from  './Cliente/add-tarjeta/add-tarjeta.component';

import { ListarAsesorComponent } from './Cliente/listar-asesor/listar-asesor.component';
import { EditAsesorComponent } from  './Cliente/edit-asesor/edit-asesor.component';
import { AddAsesorComponent } from  './Cliente/add-asesor/add-asesor.component';

import { ListarConsumoComponent } from './Cliente/listar-consumo/listar-consumo.component';
import { EditConsumoComponent } from  './Cliente/edit-consumo/edit-consumo.component';
import { AddConsumoComponent } from  './Cliente/add-consumo/add-consumo.component';
*/

const routes: Routes = [
  {path:'listar-cliente',component:ListarClienteComponent},
  {path:'add-cliente',component:AddClienteComponent},
  {path:'edit-cliente',component:EditClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
