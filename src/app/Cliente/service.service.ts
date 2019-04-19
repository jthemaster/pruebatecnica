import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Modelo/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //cliente:Cliente[];
  constructor(private http:HttpClient) { }

  //Referencia al Back-end listaclientes
  Url='http://localhost:8080/clientes';

  //Obtener todo el arreglo del objeto clientes de back-end
  getClientes() {
    return this.http.get<Cliente[]>(this.Url)
  }

  createCliente(cliente:Cliente) {
    return this.http.post<Cliente>(this.Url,cliente)
  }

  getClienteId(id:number){
    return this.http.get<Cliente>(this.Url+"/"+id)
  }

  updateCliente(cliente:Cliente){
    return this.http.put<Cliente>(this.Url+"/"+cliente.id,cliente)
  }

  deleteCliente(cliente:Cliente){
    return this.http.delete<Cliente>(this.Url+"/"+cliente.id)
  }

}