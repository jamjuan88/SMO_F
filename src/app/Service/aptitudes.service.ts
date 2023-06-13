import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aptitudes } from '../componentes/model/Aptitudes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AptitudesService {

  //Esta es la URL del backend de listar todos los empleados
  private baseURL = "http://localhost:8080/aptitudes";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos permite obtener las Aptitudes
  listarAptitudes():Observable<Aptitudes[]>{
    return this.httpClient.get<Aptitudes[]>(`${this.baseURL}`);
  }
  
  //este metodo es para registrar una Aptitud
  guardarAptitudes(aptitudes:Aptitudes): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,aptitudes);
  }
  
  //este metodo es para obtener o buscar una aptitud 
  obtenerAptitudesPorID(idAptitud:number){
    return this.httpClient.get<Aptitudes>(this.baseURL+"/"+idAptitud)
  }
  
  //este metodo sirve para actualizar los datos de una Aptitud
  actualizarAptitudes(aptitudes:Aptitudes){
    return this.httpClient.put<Aptitudes>(this.baseURL+"/"+aptitudes.idAptitud,aptitudes);
  }
  
  //este metodo es para eliminar una empresa
  eliminarAptitud(idAptitud:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idAptitud}`);
  }
  
  //este metodo me permite traer las opciones de la Aptitud para el combobox
  comboAptitudes(): Observable<Aptitudes[]>{
    return this.httpClient.get<Aptitudes[]>(`${this.baseURL}`);
  }

}
