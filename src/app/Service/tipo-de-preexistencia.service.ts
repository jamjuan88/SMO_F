import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoPreexistencia } from '../componentes/model/TipoPreexistencia';

@Injectable({
  providedIn: 'root'
})
export class TipoDePreexistenciaService {

  //Esta es la URL del backend de listar todos los empleados
  private baseURL = "http://localhost:8080/TipoPreexistencia";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos permite obtener la lista de los tipos de Preexistencias
  listarTipoPreexistencia():Observable<TipoPreexistencia[]>{
    return this.httpClient.get<TipoPreexistencia[]>(`${this.baseURL}`);
  }
  
  //este metodo es para guardar un Tipo de Preexistencia
  guardarTipoPreexistencia(tipoPreexistencia:TipoPreexistencia): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,tipoPreexistencia);
  }
  
  //este metodo es para obtener o buscar un Tipo de Preexistencia 
  obtenerTipoPreexistenciaPorId(idTipoPreexistencia:number){
    return this.httpClient.get<TipoPreexistencia>(this.baseURL+"/"+idTipoPreexistencia)
  }
  
  //este metodo sirve para actualizar los datos de un Tipo de Preexistencia
  actualizarTipoPreexistencia(tipoPreexistencia:TipoPreexistencia){
    return this.httpClient.put<TipoPreexistencia>(this.baseURL+"/"+tipoPreexistencia.idTipoPreexistencia,tipoPreexistencia);
  }
  
  //este metodo es para eliminar un Proveedor de Aptitudes
  eliminarTipoPreexistencia(idTipoPreexistencia:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idTipoPreexistencia}`);
  }
  
  //este metodo me permite traer las opciones de los Proveedores de aptitud para el combobox
  comboTipoPreexistencia():Observable<TipoPreexistencia[]>{
    return this.httpClient.get<TipoPreexistencia[]>(`${this.baseURL}`);
  }

}
