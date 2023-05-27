import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/empleado';
import { EmpleadoService } from 'src/app/empleado.service';
import { Empresa } from '../model/Empresa';
import { EmpresaService } from 'src/app/Service/empresa.service';
import { PuestoService } from 'src/app/Service/puesto.service';
import { Puesto } from '../model/Puesto';
import { EstadoLaboral } from '../model/EstadoLaboral';
import { EstadoEmplService } from 'src/app/Service/estado-empl.service';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {

  empresas: Empresa[];
  puestos: Puesto[];
  estados: EstadoLaboral[];
  empleados: Empleado[];
  empleado: Empleado = new Empleado();
  
  
  constructor(private router: Router, 
    private empleadoService: EmpleadoService,
    private empresaService: EmpresaService,
    private estadoService: EstadoEmplService,
    private puestoService: PuestoService) { }

  ngOnInit(): void {
    this.Editar();
    this.empresaService.comboEmpresa().subscribe(empresas => {this.empresas = empresas});
    this.puestoService.comboPuestos().subscribe(puestos => {this.puestos = puestos});
    this.estadoService.comboEstados().subscribe(estados => {this.estados = estados});
   }
 
   private obtenerEmpleados(){
     this.empleadoService.obtenerListaDeEmpleados().subscribe(dato=>{
      this.empleados = dato;
     })
   }

   actualizarEmpleado(empleado:Empleado):void{
    localStorage.setItem("id",empleado.id.toString());
      this.irADetalles();
    };
   

   irADetalles(){
    this.router.navigate(['editar/:id']);
   }

   Editar(){
      let id=localStorage.getItem('id');
      this.empleadoService.obtenerEmpleadoPorId(+id)
      .subscribe(data => {
        this.empleado=data;
      });
   }

   Actualizar(){
    this.empleadoService.actualizarEmpleado(this.empleado)
      .subscribe(data => {
        this.empleado=data;
        alert("Se actualizo los datos del empleado");
        this.router.navigate(['home'])

      });
   }

   

   

   

 

  


}
