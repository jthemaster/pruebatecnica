import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consumo } from '../Modelo/Consumo';

@Injectable({
  providedIn: 'root'
})
export class ServiceConsumoService {

  //consumo:Consumo[];
  constructor(private http:HttpClient) { }

  //Referencia al Back-end listaconsumos
  Url=window["cfgApiBaseUrl"]+'/consumos';

  //Obtener todo el arreglo del objeto consumos de back-end
  getConsumos() {
    return this.http.get<Consumo[]>(this.Url)
  }

  createConsumo(consumo:Consumo) {
    return this.http.post<Consumo>(this.Url,consumo)
  }

  getConsumoId(id:number){
    return this.http.get<Consumo>(this.Url+"/"+id)
  }

  updateConsumo(consumo:Consumo){
    return this.http.put<Consumo>(this.Url+"/"+consumo.id,consumo)
  }

  deleteConsumo(consumo:Consumo){
    return this.http.delete<Consumo>(this.Url+"/"+consumo.id)
  }
}
