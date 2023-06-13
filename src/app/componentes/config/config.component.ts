import { Component, OnInit } from '@angular/core';
import { Empresa } from '../model/Empresa';
import { EmpresaService } from 'src/app/Service/empresa.service';
import { PuestoService } from 'src/app/Service/puesto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Puesto } from '../model/Puesto';
import { EstadoLaboral } from '../model/EstadoLaboral';
import { EstadoEmplService } from 'src/app/Service/estado-empl.service';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from 'src/app/Service/categoria.service';
import { AptitudesService } from 'src/app/Service/aptitudes.service';
import { Aptitudes } from '../model/Aptitudes';
import { MedicoProveedorService } from 'src/app/Service/medico-proveedor.service';
import { MedicosProveedor } from '../model/MedicosProveedor';
import { TipoDePreexistenciaService } from 'src/app/Service/tipo-de-preexistencia.service';
import { TipoPreexistencia } from '../model/TipoPreexistencia';
import { PreexistenciaService } from 'src/app/Service/preexistencia.service';
import { Preexistencias } from '../model/Preexistencias';



@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  
  Empresa: Empresa[]; 
  MedicoProveedor: MedicosProveedor[];
  medicoProveedor: MedicosProveedor;
  Categoria: Categoria[];
  categoria: Categoria;
  Aptitud: Aptitudes[];
  TipoPreex: TipoPreexistencia[];
  tipoPreex: TipoPreexistencia;
  Preex: Preexistencias[];
  preex: Preexistencias;
  Puesto: Puesto[];
  Estado: EstadoLaboral[];
  id:number;
  empresa:Empresa;
  puesto: Puesto[];
  estado: EstadoLaboral;
  Visible = false;

  constructor(
    private puestoService: PuestoService,
    private empresaService:EmpresaService,
    private estadoService: EstadoEmplService,
    private categoriaService: CategoriaService,
    private route:ActivatedRoute,
    private router: Router,
    private aptitudService: AptitudesService,
    private medicoProveedorService: MedicoProveedorService,
    private tipoPreexService: TipoDePreexistenciaService,
    private preexService: PreexistenciaService
    ) { }

  ngOnInit(): void {
    this.obtenerListaDeEmpresas();
    this.obtenerListaDePuestos();
    this.obtenerListaEstado();
    this.obtenerListaDeCategorias();
    this.obtenerListaAptitudes();
    this.obtenerListaMedicosProveedor();
    this.obtenerListaTipoPreex();
    this.obtenerListaPreex();
    this.Visible = false;
  }

  private obtenerListaDeEmpresas(){
    this.empresaService.obtenerListaDeEmpresas().subscribe(dato=>{
      this.Empresa = dato;
    })
  }

  private obtenerListaEstado(){
    this.estadoService.obtenerListaDeEstados().subscribe(dato=>{
      this.Estado = dato;
    })
  }

  private obtenerListaDePuestos(){
    this.puestoService.obtenerListaDePuestos().subscribe(dato=>{
      this.Puesto = dato;
    })
  }

  private obtenerListaDeCategorias(){
    this.categoriaService.listarCategorias().subscribe(dato=>{
      this.Categoria = dato;
    })
  }

  private obtenerListaAptitudes(){
    this.aptitudService.listarAptitudes().subscribe(dato=>{
      this.Aptitud = dato;
    })
  }

  private obtenerListaTipoPreex(){
    this.tipoPreexService.listarTipoPreexistencia().subscribe(dato=>{
      this.TipoPreex = dato;
    })
  }

  private obtenerListaPreex(){
    this.preexService.listarPreexistencias().subscribe(dato=>{
      this.Preex = dato;
    })
  }

  private obtenerListaMedicosProveedor(){
    this.medicoProveedorService.listarMedicosProveedor().subscribe(dato=>{
      this.MedicoProveedor = dato;
    })
  }

  //metodos para la empresa   
  eliminarEmpresa(id: number) {  
        this.empresaService.eliminarEmpresa(id).subscribe(dato => {
          console.log(dato);
          this.obtenerListaDeEmpresas();
        })
      }
      
  
  editarEmpresa(id: number) {
        console.log('ID de la empresa:', id);       
        this.router.navigate(['config/editar/', id]);
      }


      //botones de Puestos
      eliminarPuesto(id: number) {  
        this.puestoService.eliminarPuesto(id).subscribe(dato => {
          console.log(dato);
          this.obtenerListaDePuestos();
        })
      }
      
      editarPuesto(id: number) {
        console.log('ID del puesto:', id);       
        this.router.navigate(['config/EditPuesto/', id]);
      }


      //Botones de Estados
      eliminarEstado(id: number) {  
        this.estadoService.eliminarEstado(id).subscribe(dato => {
          console.log(dato);
          this.obtenerListaEstado();
        })
      }     
  
      editarEstado(id: number) {
        console.log('ID del estado:', id);       
        this.router.navigate(['config/EditEstado/', id]);
      }

      
      //Botones de Categoria
      eliminarCategoria(id: number) {  
        this.categoriaService.eliminarCategoria(id).subscribe(dato => {
          console.log(dato);
          this.obtenerListaDeCategorias();
        })
      }     
  
      editarCategoria(id: number) {
        console.log('ID de la categoria:', id);       
        this.router.navigate(['config/EditCategoria/', id]);
      }

       //Botones de la Aptitud
       eliminarAptitud(id: number) {  
        this.aptitudService.eliminarAptitud(id).subscribe(dato => {
          console.log(dato);
          this.obtenerListaAptitudes();
        })
      }        
       
      editarAptitud(id: number) {
        console.log('ID de la Aptitud:', id);       
        this.router.navigate(['config/EditAptitud/', id]);
      }

       //Botones de la Aptitud
       eliminarMedicoProveedor(id: number) {  
        this.medicoProveedorService.eliminarMedicosProveedor(id).subscribe(dato => {
          console.log(dato);
          this.obtenerListaAptitudes();
        })
      }        
       
      editarMedicoProveedor(id: number) {
        console.log('ID del Medico Proveedor:', id);       
        this.router.navigate(['config/EditMedicoProveedor/', id]);
      }

      //Botones de los Tipos de Preexistencias
      editarTipoPreex(id: number) {
        console.log('ID del Tipo de Preex:', id);       
        this.router.navigate(['config/EditTipoPreexistencia/', id]);
      }

      eliminarTipoPreex(id: number) {  
        this.tipoPreexService.eliminarTipoPreexistencia(id).subscribe(dato => {
          console.log(dato);
          this.obtenerListaTipoPreex();
        })
      }        
       
       //Botones de las Preexistencias
       editarPreex(id: number) {
        console.log('ID del Tipo de Preex:', id);       
        this.router.navigate(['config/EditPreexistencia/', id]);
      }

      eliminarPreex(id: number) {  
        this.preexService.eliminarPreexistencia(id).subscribe(dato => {
          console.log(dato);
          this.obtenerListaPreex();
        })
      }      

      toggleTable(tableId: string) {
        const table = document.getElementById(tableId);
        const button = document.getElementById(`${tableId}-button`);
      
        if (table.style.display === 'none') {
          table.style.display = 'table';
          button.textContent = 'Ocultar tabla';
        } else {
          table.style.display = 'none';
          button.textContent = 'Mostrar tabla';
        }
      }
      
    

     
      

  
  
  
  



 

  

}
