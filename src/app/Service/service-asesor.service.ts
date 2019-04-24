import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asesor } from '../Modelo/Asesor';

@Injectable({
  providedIn: 'root'
})
export class ServiceAsesorService {

  //asesor:Asesor[];
  constructor(private http:HttpClient) { }

  //Referencia al Back-end listaasesores
  Url=window["cfgApiBaseUrl"]+'/asesores';

  //Obtener todo el arreglo del objeto asesores de back-end
  getAsesores() {
    return this.http.get<Asesor[]>(this.Url)
  }

  createAsesor(asesor:Asesor) {
    return this.http.post<Asesor>(this.Url,asesor)
  }

  getAsesorId(id:number){
    return this.http.get<Asesor>(this.Url+"/"+id)
  }

  updateAsesor(asesor:Asesor){
    return this.http.put<Asesor>(this.Url+"/"+asesor.id,asesor)
  }

  deleteAsesor(asesor:Asesor){
    return this.http.delete<Asesor>(this.Url+"/"+asesor.id)
  }
}
