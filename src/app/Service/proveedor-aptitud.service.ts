import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProveedoresAptitudes } from '../componentes/model/ProveedoresAptitudes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorAptitudService {

  //Esta es la URL del backend de listar todos los empleados
  private baseURL = "http://localhost:8080/ProveedoresAptitudes";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos permite obtener las Proveedores de Aptitudes
  listarProveedorAptitudes():Observable<ProveedoresAptitudes[]>{
    return this.httpClient.get<ProveedoresAptitudes[]>(`${this.baseURL}`);
  }
  
  //este metodo es para registrar un Proveedor de Aptitudes
  guardarProveedorAptitud(proveedoresAptitudes:ProveedoresAptitudes): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,proveedoresAptitudes);
  }
  
  //este metodo es para obtener o buscar un Proveedor de Aptitud 
  obtenerProveedorAptitudPorID(idProveedorAptitud:number){
    return this.httpClient.get<ProveedoresAptitudes>(this.baseURL+"/"+idProveedorAptitud)
  }
  
  //este metodo sirve para actualizar los datos de un proveedor de Aptitud
  actualizarProveedorAptitud(proveedoresAptitudes:ProveedoresAptitudes){
    return this.httpClient.put<ProveedoresAptitudes>(this.baseURL+"/"+proveedoresAptitudes.idProveedorAptitud,proveedoresAptitudes);
  }
  
  //este metodo es para eliminar un Proveedor de Aptitudes
  eliminarProveedorAptitud(idProveedorAptitud:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idProveedorAptitud}`);
  }
  
  //este metodo me permite traer las opciones de los Proveedores de aptitud para el combobox
  comboProveedoresAptitud():Observable<ProveedoresAptitudes[]>{
    return this.httpClient.get<ProveedoresAptitudes[]>(`${this.baseURL}`);
  }
}
