import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Puesto } from '../componentes/model/Puesto';

@Injectable({
  providedIn: 'root'
})
export class PuestoService {

  //Esta es la URL del backend de listar todos los empleados
  private baseURL = "http://localhost:8080/puestos";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos permite obtener los puestos
obtenerListaDePuestos():Observable<Puesto[]>{
  return this.httpClient.get<Puesto[]>(`${this.baseURL}`);
}

//este metodo es para registrar un puesto
registrarPuesto(puesto:Puesto): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`,puesto);
}


//este metodo es para obtener o buscar un puesto
obtenerPuestoPorId(idEmpresa:number){
  return this.httpClient.get<Puesto>(this.baseURL+"/"+idEmpresa)
}

//este metodo sirve para actualizar los datos de un puesto
actualizarPuesto(puesto:Puesto){
  return this.httpClient.put<Puesto>(this.baseURL+"/"+puesto.idPuesto,puesto);
}

//este metodo es para eliminar un puesto
eliminarPuesto(idPuesto:number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${idPuesto}`);
}

//este metodo me permite traer las opciones de los puestos para el combobox
comboPuestos(): Observable<Puesto[]>{
  return this.httpClient.get<Puesto[]>(`${this.baseURL}`);
}

}
