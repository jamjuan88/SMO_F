import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Preexistencias } from '../componentes/model/Preexistencias';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreexistenciaService {

  //Esta es la URL del backend de listar todos los empleados
  private baseURL = "http://localhost:8080/Preexistencia";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos permite obtener la lista de las Preexistencias
  listarPreexistencias():Observable<Preexistencias[]>{
    return this.httpClient.get<Preexistencias[]>(`${this.baseURL}`);
  }
  
  //este metodo es para guardar una Preexistencia
  guardarPreexistencia(preexistencias:Preexistencias): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,preexistencias);
  }
  
  //este metodo es para obtener o buscar una Preexistencia 
  obtenerPreexistenciaPorId(idPreexistencia:number){
    return this.httpClient.get<Preexistencias>(this.baseURL+"/"+idPreexistencia)
  }
  
  //este metodo sirve para actualizar los datos de una Preexistencia
  actualizarPreexistencia(preexistencias:Preexistencias){
    return this.httpClient.put<Preexistencias>(this.baseURL+"/"+preexistencias.idPreexistencia,preexistencias);
  }
  
  //este metodo es para eliminar un Proveedor de Aptitudes
  eliminarPreexistencia(idPreexistencia:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idPreexistencia}`);
  }
  
  //este metodo me permite traer las opciones de los Proveedores de aptitud para el combobox
  comboPreexistencia():Observable<Preexistencias[]>{
    return this.httpClient.get<Preexistencias[]>(`${this.baseURL}`);
  }
}
