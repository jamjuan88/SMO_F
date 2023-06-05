import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../componentes/model/Categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  //Esta es la URL del backend de listar todos los empleados
  private baseURL = "http://localhost:8080/categorias";

  constructor(private httpClient : HttpClient) { }

  //este metodo nos permite obtener las Categorias
  listarCategorias():Observable<Categoria[]>{
  return this.httpClient.get<Categoria[]>(`${this.baseURL}`);
}

//este metodo es para registrar una Categoria
guardarCategoria(categoria:Categoria): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`,categoria);
}


//este metodo es para obtener o buscar una Categoria
obtenerCategoriaPorID(idCategoria:number){
  return this.httpClient.get<Categoria>(this.baseURL+"/"+idCategoria)
}

//este metodo sirve para actualizar los datos de una Categoria
actualizarCategoria(categoria:Categoria){
  return this.httpClient.put<Categoria>(this.baseURL+"/"+categoria.idCategoria,categoria);
}

//este metodo es para eliminar una empresa
eliminarCategoria(idCategoria:number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${idCategoria}`);
}

//este metodo me permite traer las opciones de la Categoria para el combobox
comboCategoria(): Observable<Categoria[]>{
  return this.httpClient.get<Categoria[]>(`${this.baseURL}`);
}


}
