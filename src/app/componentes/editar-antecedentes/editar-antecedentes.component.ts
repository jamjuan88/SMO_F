import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AntecedentesService } from 'src/app/Service/antecedentes.service';
import { AptitudesService } from 'src/app/Service/aptitudes.service';
import { PreexistenciaService } from 'src/app/Service/preexistencia.service';
import { ProveedorAptitudService } from 'src/app/Service/proveedor-aptitud.service';
import { TipoDePreexistenciaService } from 'src/app/Service/tipo-de-preexistencia.service';
import { EmpleadoService } from 'src/app/empleado.service';
import { Aptitudes } from '../model/Aptitudes';
import { TipoPreexistencia } from '../model/TipoPreexistencia';
import { Preexistencias } from '../model/Preexistencias';
import { ProveedoresAptitudes } from '../model/ProveedoresAptitudes';
import { Empleado } from 'src/app/empleado';
import { AntecedentesEmpleado } from '../model/AntecedentesEmpleado';
import { MedicoProveedorService } from 'src/app/Service/medico-proveedor.service';
import { MedicosProveedor } from '../model/MedicosProveedor';

@Component({
  selector: 'app-editar-antecedentes',
  templateUrl: './editar-antecedentes.component.html',
  styleUrls: ['./editar-antecedentes.component.css']
})
export class EditarAntecedentesComponent implements OnInit {

  aptitudes: Aptitudes[] = [];
  tipoPreexs: TipoPreexistencia[];
  preexistencias: Preexistencias[];
  proveedoresAptitudes: ProveedoresAptitudes[];
  empleados: Empleado[];
  empleado: Empleado = new Empleado();
  
  medicosProveedor: MedicosProveedor[];
  antecedente: AntecedentesEmpleado[];
  antecedentes: AntecedentesEmpleado = new AntecedentesEmpleado;
  empleadoId: number;




  constructor(private router: Router,
    private route: ActivatedRoute,
    private aptitudService: AptitudesService,
    private tipoPreexService: TipoDePreexistenciaService,
    private preexistenciaService: PreexistenciaService,
    private proveedoresService: ProveedorAptitudService,
    private empleadoService: EmpleadoService,
    private antecedenteService: AntecedentesService,
    private medicosProveedorService: MedicoProveedorService
     ) { }

  ngOnInit(): void {
    
    this.aptitudService.comboAptitudes().subscribe(aptitudes => {this.aptitudes = aptitudes});
    this.tipoPreexService.comboTipoPreexistencia().subscribe(tipoPreexs => {this.tipoPreexs = tipoPreexs});
    this.preexistenciaService.comboPreexistencia().subscribe(preexistencias => {this.preexistencias = preexistencias});
    this.proveedoresService.comboProveedoresAptitud().subscribe(proveedoresAptitudes => {this.proveedoresAptitudes = proveedoresAptitudes});
    this.medicosProveedorService.comboMedicosProveedor().subscribe(medicosProveedor => {this.medicosProveedor = medicosProveedor});
    this.empleadoService.comboDeEmpleados().subscribe(empleados => {this.empleados = empleados});
    
    const id = +this.route.snapshot.paramMap.get('id');  
    console.log('ID recuperado de la URL:', id);
    this.EditarAntecedentes(id);
   
  }

  getMedicosByProveedor(proveedor) {
    // Lógica para filtrar los médicos según el proveedor seleccionado
    return this.medicosProveedor.filter(medico => medico.proveedoresAptitudes.idProveedorAptitud === proveedor.idProveedorAptitud);
  }

 
   Actualizar2(id:number){
    this.antecedenteService.actualizarAntecedentesEmpleado(this.antecedentes)
      .subscribe(data => {
        this.antecedentes=data;
        alert("Se actualizo los datos de los Antecedentes");
        this.empleadoId = this.antecedentes.empleado.id; 
        this.router.navigate(['editar', this.empleadoId]);

      });
   }

   EditarAntecedentes(id){
       this.antecedenteService.obtenerAntecedentesEmpleadoPorID(id)
    .subscribe(data => {
      this.antecedentes=data;
      
    });
 }

 

 

}
