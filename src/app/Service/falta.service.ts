import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Falta } from '../componentes/model/Falta'

@Injectable({
  providedIn: 'root'
})
export class FaltaService {

   //Esta es la URL del backend de listar todos los empleados
   private baseURL = "http://localhost:8080/faltas";
  

  constructor(private httpClient : HttpClient) { }

  //este metodo es para registrar una falta
  guardarFalta(falta:Falta): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`,falta);
}

guardarFaltaConArchivo(falta: Falta, archivo: File, nombreArchivo: string): Observable<Object> {
  const formData: FormData = new FormData();
  formData.append('archivo', archivo, nombreArchivo); // El tercer parámetro es el nombre completo del archivo, incluyendo la extensión
  formData.append('faltaId', falta.idFalta.toString());
  formData.append('nombreArchivo', nombreArchivo);
  
  return this.httpClient.post(`${this.baseURL}/upload2`, formData);
}

guardarFaltaConArchivo2(falta: Falta, archivo: File, nombreArchivo: string, extensionArchivo: string): Observable<Object> {
  const formData: FormData = new FormData();
  formData.append('archivo', archivo, nombreArchivo); // El tercer parámetro es el nombre completo del archivo, incluyendo la extensión
  formData.append('faltaId', falta.idFalta.toString());
  formData.append('nombreArchivo', nombreArchivo);
  formData.append('extensionArchivo', extensionArchivo); // pasando la extension al servidor

  return this.httpClient.post(`${this.baseURL}/upload2`, formData);
}


//este metodo es para eliminar una falta
eliminarFalta(idFalta:number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${idFalta}`);
}

 //este metodo nos permite obtener las faltas
 obtenerFaltas():Observable<Falta[]>{
  return this.httpClient.get<Falta[]>(`${this.baseURL}`);
}

//este metodo es para obtener o buscar una falta
obtenerFaltasPorEmpleado(id: number): Observable<Falta[]> {
return this.httpClient.get<Falta[]>(`${this.baseURL}/empleado/${id}`);
}

//este metodo es para obtener falta por id
obtenerFaltaPorId(idFalta: number): Observable<Falta> {
  return this.httpClient.get<Falta>(`${this.baseURL}/${idFalta}`);
}

//este metodo sirve para actualizar los datos de un puesto
actualizarFalta(falta:Falta){
  return this.httpClient.put<Falta>(this.baseURL+"/"+falta.idFalta,falta);
}





}