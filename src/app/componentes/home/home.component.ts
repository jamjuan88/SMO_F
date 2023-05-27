import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/empleado';
import { EmpleadoService } from 'src/app/empleado.service';
import { Empresa } from '../model/Empresa';
import { EmpresaService } from 'src/app/Service/empresa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empleados:Empleado[] = [];
  empresas:Empresa[];
  term: string;

 



  constructor(private empleadoService:EmpleadoService,
    private router: Router,
    private empresaService: EmpresaService) { }

    filterDato = '';

  ngOnInit(): void {
      this.obtenerEmpleados();
      this.obtenerEmpresas(); 
  }

  private obtenerEmpleados(){
    this.empleadoService.obtenerListaDeEmpleados().subscribe(dato=>{
      this.empleados = dato;
    })
  }

  private obtenerEmpresas(){
    this.empresaService.obtenerListaDeEmpresas().subscribe(dato=>{
      this.empresas = dato;
    })
  }

  /*private obtenerEmpresa(){
    this.empresaService.obtenerListaDeEmpresas().subscribe(dato=>{
      this.empresas = dato;
    })
  }*/

  verDetallesEmpleado(id:number){
    this.router.navigate(['editar',id]);
  }

  eliminarEmpleado(id:number){
    this.empleadoService.eliminarEmpleado(id).subscribe(dato =>{
      console.log(dato);
      this.obtenerEmpleados();
    })
  }

  actualizarEmpleado(id:number){
    this.router.navigate(['actualizar-empleado',id]);
  }

 

}
