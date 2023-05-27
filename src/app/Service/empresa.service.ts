import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../componentes/model/Empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  //Esta es la URL del backend de listar todos los empleados
  private baseURL = "http://localhost:8080/empresas";

  constructor(private httpClient : HttpClient) { }

//este metodo nos permite obtener las empresas
obtenerListaDeEmpresas():Observable<Empresa[]>{
  return this.httpClient.get<Empresa[]>(`${this.baseURL}`);
}

//este metodo es para registrar una empresa
registrarEmpresa(empresa:Empresa): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`,empresa);
}


//este metodo es para obtener o buscar un empleado
obtenerEmpresaPorId(idEmpresa:number){
  return this.httpClient.get<Empresa>(this.baseURL+"/"+idEmpresa)
}

//este metodo sirve para actualizar los datos del empleado
actualizarEmpresa(empresa:Empresa){
  return this.httpClient.put<Empresa>(this.baseURL+"/"+empresa.idEmpresa,empresa);
}

//este metodo es para eliminar una empresa
eliminarEmpresa(idEmpresa:number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${idEmpresa}`);
}

//este metodo me permite traer las opciones de la empresa para el combobox
comboEmpresa(): Observable<Empresa[]>{
  return this.httpClient.get<Empresa[]>(`${this.baseURL}`);
}

}
