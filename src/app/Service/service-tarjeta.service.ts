import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarjeta } from '../Modelo/Tarjeta';

@Injectable({
  providedIn: 'root'
})
export class ServiceTarjetaService {

  //tarjeta:Tarjeta[];
  constructor(private http:HttpClient) { }

  //Referencia al Back-end listatarjetas
  Url=window["cfgApiBaseUrl"]+'/tarjetas';

  //Obtener todo el arreglo del objeto tarjetas de back-end
  getTarjetas() {
    return this.http.get<Tarjeta[]>(this.Url)
  }

  createTarjeta(tarjeta:Tarjeta) {
    return this.http.post<Tarjeta>(this.Url,tarjeta)
  }

  getTarjetaId(id:number){
    return this.http.get<Tarjeta>(this.Url+"/"+id)
  }

  updateTarjeta(tarjeta:Tarjeta){
    return this.http.put<Tarjeta>(this.Url+"/"+tarjeta.id,tarjeta)
  }

  deleteTarjeta(tarjeta:Tarjeta){
    return this.http.delete<Tarjeta>(this.Url+"/"+tarjeta.id)
  }
}
