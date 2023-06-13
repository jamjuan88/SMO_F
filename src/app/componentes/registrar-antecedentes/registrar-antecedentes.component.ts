import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AntecedentesService } from 'src/app/Service/antecedentes.service';
import { EmpleadoService } from 'src/app/empleado.service';
import { AntecedentesEmpleado } from '../model/AntecedentesEmpleado';
import { Aptitudes } from '../model/Aptitudes';
import { TipoPreexistencia } from '../model/TipoPreexistencia';
import { Preexistencias } from '../model/Preexistencias';
import { ProveedoresAptitudes } from '../model/ProveedoresAptitudes';
import { MedicosProveedor } from '../model/MedicosProveedor';
import { Empleado } from 'src/app/empleado';
import { AptitudesService } from 'src/app/Service/aptitudes.service';
import { MedicoProveedorService } from 'src/app/Service/medico-proveedor.service';
import { ProveedorAptitudService } from 'src/app/Service/proveedor-aptitud.service';
import { TipoDePreexistenciaService } from 'src/app/Service/tipo-de-preexistencia.service';
import { PreexistenciaService } from 'src/app/Service/preexistencia.service';
import { finalize, switchMap } from 'rxjs';
import { id } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-registrar-antecedentes',
  templateUrl: './registrar-antecedentes.component.html',
  styleUrls: ['./registrar-antecedentes.component.css']
})
export class RegistrarAntecedentesComponent implements OnInit {

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef<HTMLInputElement>;

  public archivoSeleccionado: File;

  id:number;
  nombreArchivo: string;
  nombre2: string;  
  extensionArchivo: string;
  aptitudes:Aptitudes[] = [];
  aptitud: Aptitudes;
  tipoPreexistencias:TipoPreexistencia[] = [];
  tipoPreexistencia:TipoPreexistencia;
  preexistencias:Preexistencias[] = [];
  proveedoresAptitudes:ProveedoresAptitudes[] = [];
  medicosProveedor:MedicosProveedor[] = [];
  empleados:Empleado[] = [];
  urlArchivoExamen: string;
  descripcionPreexistencia: string;
  empleadoId: number;
  empleado: string;
  antecedente2: AntecedentesEmpleado = new AntecedentesEmpleado;
  nombre: string;
  apellido: string;
  empleadoo:Empleado;
  medicosProveedoresOriginal: any[];
  

  antecedente: AntecedentesEmpleado = {
    idAntecedentes: undefined,
    aptitudes: undefined,
    tipoPreexistencia: undefined,
    preexistencias: undefined,
    proveedoresAptitudes:undefined,
    medicosProveedor:undefined,
    empleado: undefined,
    urlArchivoExamen: undefined,
    descripcionPreexistencia: undefined,
  }


  constructor(private router: Router,
    private route: ActivatedRoute,
    private antecedenteService: AntecedentesService,
    private sanitizer: DomSanitizer,
    private empleadoService: EmpleadoService,
    private aptitudService: AptitudesService,
    private medicoProveedorService: MedicoProveedorService,
    private proveedoresAptitudService: ProveedorAptitudService,
    private tipoPreexService: TipoDePreexistenciaService,
    private preexService: PreexistenciaService

   
    ) { }

  ngOnInit(): void {
    this.empleadoService.obtenerListaDeEmpleados().subscribe(response => {this.empleados = response});
    this.route.params.subscribe(params => {
      this.empleadoId = +params['id'];
      this.obtenerEmpleado();
      this.aptitudService.comboAptitudes().subscribe(response => {this.aptitudes = response});
      this.tipoPreexService.comboTipoPreexistencia().subscribe(response => {this.tipoPreexistencias = response});
      this.preexService.comboPreexistencia().subscribe(response => {this.preexistencias = response});
      this.proveedoresAptitudService.listarProveedorAptitudes().subscribe(response => {this.proveedoresAptitudes = response});
      this.medicoProveedorService.listarMedicosProveedor().subscribe(response => {this.medicosProveedor = response});
      this.medicosProveedoresOriginal = [...this.medicosProveedor];

    });      
  }

   

  guardarAntecedentes(){
    if(this.antecedente.empleado.id == null){
      console.log("los campos estan vacios");
    }else
     this.antecedenteService.guardarAntecedentesEmpleado(this.antecedente).subscribe(dato =>{ 
     this.ngOnInit();    
     console.log(dato);
    },error => console.log(error));
  }

  getMedicosByProveedor(proveedor) {
    // Lógica para filtrar los médicos según el proveedor seleccionado
    return this.medicosProveedor.filter(medico => medico.proveedoresAptitudes.idProveedorAptitud === proveedor.idProveedorAptitud);
  }

  guardarAntecedentes2() {
    // Validar que se haya seleccionado un archivo
    if (!this.archivoSeleccionado) {
      // Mostrar mensaje de error o realizar alguna acción apropiada
      return;
    }
  
    this.antecedenteService.guardarAntecedentesEmpleado(this.antecedente).pipe(
      switchMap((antecedenteGuardado: AntecedentesEmpleado) => {
        // Obtener el ID de los antecedentes guardados
        const antecedentesId = antecedenteGuardado.idAntecedentes;
             
        // Asignar el ID de los antecedentes al objeto antecedentes
        this.antecedente.idAntecedentes = antecedentesId;
        
  
        // Realizar la solicitud de carga con el ID obtenido
        return this.antecedenteService.guardarAntecedentesEmpleadoConArchivo(this.antecedente, this.archivoSeleccionado, this.nombreArchivo, this.extensionArchivo);
      }),
      finalize(() => {
        const idEmpleado = this.antecedente.empleado.id;
        this.irVistaDatosEmpleado(idEmpleado);

      })
    ).subscribe(
      response => {
        // Lógica adicional después de guardar la falta y el archivo
        console.log('antecedentes y archivo guardados correctamente');
        // Realizar cualquier otra acción necesaria, como redirigir a otra página
      },
      error => {
        // Manejo de errores
        console.error('Error al guardar la falta y el archivo:', error);
      }
    );
  }
  
  irVistaDatosEmpleado(idEmpleado: number) {
    this.router.navigate([`editar/${idEmpleado}`]);
  }
  

   onFileSelected(event: any) {
    this.archivoSeleccionado = event.target.files[0];
    this.nombreArchivo = this.archivoSeleccionado.name;
   
    const extension = this.archivoSeleccionado.name.split('.').pop(); // Obtener la extensión del archivo
    this.extensionArchivo = extension;
  }

  private obtenerEmpleados(){
    this.empleadoService.obtenerListaDeEmpleados().subscribe(dato=>{
      this.empleados = dato;
      this.antecedente.empleado = this.empleados.find(empleado => empleado.id === this.empleadoId);
    })
  }

  obtenerEmpleado() {
    this.empleadoService.obtenerEmpleadoPorId(this.empleadoId).subscribe(empleado => {
    this.empleado = empleado.nombre + ' ' + empleado.apellido;  
    this.antecedente.empleado = empleado;  
    });
  }

  obtenerNombreArchivo(rutaArchivo: string): string {
    const partesRuta = rutaArchivo.split('/');
    return partesRuta[partesRuta.length - 1];
  }

  openFile2(employeeId: number, idAntecedentes: number, urlArchivo: string) {
    this.nombreArchivo = this.obtenerNombreArchivo(urlArchivo);
    this.empleadoService.openFile3(employeeId.toString(), idAntecedentes, this.nombreArchivo);
  }

  

  

}
