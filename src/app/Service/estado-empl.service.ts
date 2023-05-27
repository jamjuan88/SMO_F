import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstadoLaboral } from '../componentes/model/EstadoLaboral';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoEmplService {

   //Esta es la URL del backend de listar todos los empleados
   private baseURL = "http://localhost:8080/estadoLaboral";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos permite obtener los estados
  obtenerListaDeEstados():Observable<EstadoLaboral[]>{
  return this.httpClient.get<EstadoLaboral[]>(`${this.baseURL}`);
}

  //este metodo es para registrar un estado
  registrarEstadoEmpl(estado:EstadoLaboral): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`,estado);
}

//este metodo es para obtener o buscar un estado
obtenerEstadoPorId(idEstado:number){
  return this.httpClient.get<EstadoLaboral>(this.baseURL+"/"+idEstado)
}

//este metodo sirve para actualizar los datos de un estado
actualizarEstadoEmpl(estado:EstadoLaboral){
  return this.httpClient.put<EstadoLaboral>(this.baseURL+"/"+estado.idEstado,estado);
}

//este metodo es para eliminar un estado
eliminarEstado(idEstado:number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${idEstado}`);
}

//este metodo me permite traer las opciones de los estados para el combobox
comboEstados(): Observable<EstadoLaboral[]>{
  return this.httpClient.get<EstadoLaboral[]>(`${this.baseURL}`);
}


}
