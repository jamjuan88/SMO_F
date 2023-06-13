import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AntecedentesEmpleado } from '../componentes/model/AntecedentesEmpleado';

@Injectable({
  providedIn: 'root'
})
export class AntecedentesService {

  //Esta es la URL del backend de listar todos los empleados
  private baseURL = "http://localhost:8080/AntecedentesEmpleado";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos permite obtener los Antecedentes Medicos
  listarAntecedentesEmpleados():Observable<AntecedentesEmpleado[]>{
    return this.httpClient.get<AntecedentesEmpleado[]>(`${this.baseURL}`);
  }
  
  //este metodo es para registrar Antecedentes del Empleado
  guardarAntecedentesEmpleado(antecedentesEmpleado:AntecedentesEmpleado): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,antecedentesEmpleado);
  }

  guardarAntecedentesEmpleadoConArchivo(antecedentesEmpleado: AntecedentesEmpleado, archivo: File, nombreArchivo: string, extensionArchivo: string): Observable<Object> {
    const formData: FormData = new FormData();
    formData.append('archivo', archivo, nombreArchivo); // El tercer parámetro es el nombre completo del archivo, incluyendo la extensión
    formData.append('antecedentesId', antecedentesEmpleado.idAntecedentes.toString());
    formData.append('nombreArchivo', nombreArchivo);
    formData.append('extensionArchivo', extensionArchivo); // pasando la extension al servidor
  
    return this.httpClient.post(`${this.baseURL}/upload2`, formData);
  }
  
  //este metodo es para obtener o buscar una falta
  obtenerAntecedentesPorEmpleado(id: number): Observable<AntecedentesEmpleado[]> {
  return this.httpClient.get<AntecedentesEmpleado[]>(`${this.baseURL}/empleado/${id}`);
  }
  
  //este metodo es para obtener o buscar una Categoria
  obtenerAntecedentesEmpleadoPorID(idAntecedentes:number){
    return this.httpClient.get<AntecedentesEmpleado>(this.baseURL+"/"+idAntecedentes)
  }
  
  //este metodo sirve para actualizar los datos de una Categoria
  actualizarAntecedentesEmpleado(antecedentesEmpleado:AntecedentesEmpleado){
    return this.httpClient.put<AntecedentesEmpleado>(this.baseURL+"/"+antecedentesEmpleado.idAntecedentes,antecedentesEmpleado);
  }
  
  //este metodo es para eliminar una empresa
  eliminarAntecedentesEmpleado(idAntecedentes:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idAntecedentes}`);
  }
  
  //este metodo me permite traer las opciones de la Categoria para el combobox
  comboAntecedentes(): Observable<AntecedentesEmpleado[]>{
    return this.httpClient.get<AntecedentesEmpleado[]>(`${this.baseURL}`);
  }

  openFile3(employeeId: string, idAntecedentes: number, nombreArch: string) {
    const fileUrl = `${this.baseURL}/archivosAntecedentes/${employeeId}/${idAntecedentes}/${nombreArch}`;
    window.location.href = fileUrl;
  }

  



}
