import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ListarComponent } from './Cliente/listar/listar.component';
//import { AddComponent } from './Cliente/add/add.component';
//import { EditComponent } from './Cliente/edit/edit.component';
import { FormsModule } from '@angular/forms';
//import{ ServiceService }from '../app/Service/service.service';
import{ HttpClientModule } from '@angular/common/http';

import{ ServiceClienteService }from '../app/Service/service-cliente.service';
import{ ServiceTarjetaService }from '../app/Service/service-tarjeta.service';
import{ ServiceConsumoService }from '../app/Service/service-consumo.service';
import{ ServiceAsesorService }from '../app/Service/service-asesor.service';

import { ListarClienteComponent } from './Cliente/listar-cliente/listar-cliente.component';
import { EditClienteComponent } from './Cliente/edit-cliente/edit-cliente.component';
import { AddClienteComponent } from './Cliente/add-cliente/add-cliente.component';
import { ListarTarjetaComponent } from './Tarjeta/listar-tarjeta/listar-tarjeta.component';
//import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { AddTarjetaComponent } from './Tarjeta/add-tarjeta/add-tarjeta.component';
import { EditTarjetaComponent } from './Tarjeta/edit-tarjeta/edit-tarjeta.component';
import { ListarConsumoComponent } from './Consumo/listar-consumo/listar-consumo.component';
import { AddConsumoComponent } from './Consumo/add-consumo/add-consumo.component';
import { EditConsumoComponent } from './Consumo/edit-consumo/edit-consumo.component';
import { ListarAsesorComponent } from './Asesor/listar-asesor/listar-asesor.component';
import { AddAsesorComponent } from './Asesor/add-asesor/add-asesor.component';
import { EditAsesorComponent } from './Asesor/edit-asesor/edit-asesor.component';
import { SearchFilterPipePipe } from './search-filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
 //   ListarComponent,
 //   AddComponent,
 //   EditComponent,
    ListarClienteComponent,
    EditClienteComponent,
    AddClienteComponent,
    ListarTarjetaComponent,
 //   TarjetaComponent,
    AddTarjetaComponent,
    EditTarjetaComponent,
    ListarConsumoComponent,
    AddConsumoComponent,
    EditConsumoComponent,
    ListarAsesorComponent,
    AddAsesorComponent,
    EditAsesorComponent,
    SearchFilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    //ServiceService,
    ServiceClienteService,
    ServiceTarjetaService,
    ServiceConsumoService,
    ServiceAsesorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
