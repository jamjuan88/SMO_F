import { Component, OnInit } from '@angular/core';
import { Empresa } from '../model/Empresa';
import { EmpresaService } from 'src/app/Service/empresa.service';
import { PuestoService } from 'src/app/Service/puesto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Puesto } from '../model/Puesto';
import { EstadoLaboral } from '../model/EstadoLaboral';
import { EstadoEmplService } from 'src/app/Service/estado-empl.service';



@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  
  Empresa: Empresa[]; 
  Puesto: Puesto[];
  Estado: EstadoLaboral[];
  id:number;
  empresa:Empresa;
  puesto: Puesto[];
  estado: EstadoLaboral;
  constructor(
    private puestoService: PuestoService,
    private empresaService:EmpresaService,
    private estadoService: EstadoEmplService,
    private route:ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.obtenerListaDeEmpresas();
    this.obtenerListaDePuestos();
    this.obtenerListaEstado();
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
        console.log('ID del puesto:', id);       
        this.router.navigate(['config/EditEstado/', id]);
      }
      

  
  
  
  



 

  

}
