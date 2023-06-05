import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';
import { Falta } from './componentes/model/Falta';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //Esta es la URL del backend de listar todos los empleados 
  private baseURL = "http://localhost:8080/api/v1/empleados"; 
 

  constructor(private httpClient : HttpClient) { }

  //este metodo nos permite obtener los empleados
  obtenerListaDeEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }

  //este metodo es para registrar un empleado
  registrarEmpleado(empleado:Empleado): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,empleado);
  }

  //este metodo es para obtener o buscar un empleado
  obtenerEmpleadoPorId(id:number){
    return this.httpClient.get<Empleado>(this.baseURL+"/"+id)
  }

  //este metodo sirve para actualizar los datos del empleado
  actualizarEmpleado(empleado:Empleado){
    return this.httpClient.put<Empleado>(this.baseURL+"/"+empleado.id,empleado);
  }

   
  //este metodo es para eliminar al empleado
  eliminarEmpleado(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  upload(file: File, employeeId: string, fileName: string): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    formData.append('employeeId', employeeId);
    formData.append('fileName', fileName);

    const req = new HttpRequest('POST', `${this.baseURL}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.httpClient.request(req);
}




   getFiles(employeeId: string): Observable<any> {
   return this.httpClient.get(`${this.baseURL}/files/${employeeId}`);
   }

   getEmployeeFiles(employeeId: string): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.baseURL}/files/${employeeId}`);
  }

  

  openFile(employeeId: string, fileName: string) {
    const fileUrl = `${this.baseURL}/files/${employeeId}/${fileName}`;
    window.location.href = fileUrl;
  }

  openFile2(employeeId: string, idFalta: number, fileName: string) {
    const fileUrl = `${this.baseURL}/files/${employeeId}/${idFalta}/${fileName}`;
    window.location.href = fileUrl;
  }

  openFile3(employeeId: string, idFalta: number, nombreArch: string) {
    const fileUrl = `${this.baseURL}/archivosFalta/${employeeId}/${idFalta}/${nombreArch}`;
    window.location.href = fileUrl;
  }

 

  
  
  
  

 

  deleteFile(employeeId: string, fileName: string): Observable<any> {
    const url = `${this.baseURL}/files/${employeeId}/${fileName}`;
    return this.httpClient.delete(url);
  }

  actualizarEstadoLaboral(empleadoId: number, estadoLaboral: any) {
    const url = `${this.baseURL}/${empleadoId}/estado-laboral`;
    return this.httpClient.put(url, estadoLaboral);
  }
  
  
  

}
