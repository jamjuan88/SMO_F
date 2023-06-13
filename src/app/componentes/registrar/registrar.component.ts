import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/empleado';
import { EmpleadoService } from 'src/app/empleado.service';
import { EmpresaService } from 'src/app/Service/empresa.service';
import { Empresa } from '../model/Empresa';
import { Puesto } from '../model/Puesto';
import { PuestoService } from 'src/app/Service/puesto.service';
import { EstadoLaboral } from '../model/EstadoLaboral';
import { EstadoEmplService } from 'src/app/Service/estado-empl.service';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from 'src/app/Service/categoria.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  empleado : Empleado = new Empleado();
  empleados:Empleado[] = [];
  edad:number;
  empresa: Empresa;
  empresas: Empresa[] = [];
  categoria : Categoria;
  categorias: Categoria[] = [];
  puesto: Puesto;
  puestos: Puesto[] = [];
  estadoLaboral: EstadoLaboral;
  estadosLaboral: EstadoLaboral[] = [];

  
    
  constructor(private empleadoService:EmpleadoService,
    private router: Router,
    private empresaService: EmpresaService,
    private puestoService: PuestoService,
    private categoriaService: CategoriaService,
    private estadoService: EstadoEmplService

    ) { }

  ngOnInit(): void {
   this.estadoService.obtenerListaDeEstados().subscribe(response => {this.estadosLaboral = response}); 
   this.empresaService.comboEmpresa().subscribe(response => {this.empresas = response});
   this.puestoService.comboPuestos().subscribe(response => {this.puestos = response});
   this.categoriaService.comboCategoria().subscribe(response => {this.categorias = response}); 
  }

  guardarEmpleado(){
      this.empleadoService.registrarEmpleado(this.empleado).subscribe(dato =>{
      console.log(dato);
      this.irListaEmpleados();
      },
      error => console.log(error));
  }  

  irListaEmpleados(){
    this.router.navigate(['/home']);
  }

  onSubmit(): void {
    this.guardarEmpleado();
    
  }


}
