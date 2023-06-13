import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MedicosProveedor } from '../componentes/model/MedicosProveedor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicoProveedorService {

  //Esta es la URL del backend de listar todos los empleados
  private baseURL = "http://localhost:8080/MedicosProveedores";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos permite obtener las Medicos del Proveedor
  listarMedicosProveedor():Observable<MedicosProveedor[]>{
    return this.httpClient.get<MedicosProveedor[]>(`${this.baseURL}`);
  }
  
  //este metodo es para registrar un Medicos Proveedor
  guardarMedicosProveedor(medicosProveedor:MedicosProveedor): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,medicosProveedor);
  }
  
  //este metodo es para obtener o buscar un Medico Proveedor
  obtenerMedicosProveedorPorID(idMedicoProveedor:number){
    return this.httpClient.get<MedicosProveedor>(this.baseURL+"/"+idMedicoProveedor)
  }
  
  //este metodo sirve para actualizar los datos de un Medico proveedor
  actualizarMedicosProveedor(medicosProveedor:MedicosProveedor){
    return this.httpClient.put<MedicosProveedor>(this.baseURL+"/"+medicosProveedor.idMedicoProveedor,medicosProveedor);
  }
  
  //este metodo es para eliminar un Medico Proveedor
  eliminarMedicosProveedor(idMedicoProveedor:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idMedicoProveedor}`);
  }
  
  //este metodo me permite traer las opciones de los Medicos Proveedores para el combobox
  comboMedicosProveedor(): Observable<MedicosProveedor[]>{
    return this.httpClient.get<MedicosProveedor[]>(`${this.baseURL}`);
  }

}
