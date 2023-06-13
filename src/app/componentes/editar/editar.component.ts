import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/empleado';
import { EmpleadoService } from 'src/app/empleado.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FaltaService } from 'src/app/Service/falta.service';
import { Falta } from '../model/Falta';
import { AntecedentesEmpleado } from '../model/AntecedentesEmpleado';
import { AntecedentesService } from 'src/app/Service/antecedentes.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id:number;
  
  edad:number;
  tiempo:number;
  tiempo2:string;
  url:string;
  empleado:Empleado;
  fechaActual = new Date();
  faltas: Falta[];
  falta: Falta;
  antecedentes: AntecedentesEmpleado[];
  antecedente: AntecedentesEmpleado;
  cantidadFaltas:number;
  totalDiasFaltados:number = 0;
  cantidadFaltasDias:number;
  empleadoFiles: string[] = [];
  nombreArch:string;
  selectedFile: File;
  fileName: string;
  employeeId = '';
  fileToUpload: File;
  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  
 
  
   
  
  constructor(private route:ActivatedRoute,
    private empleadoService:EmpleadoService,
    private router:Router,
    private sanitizer: DomSanitizer,
    private antecedentesService: AntecedentesService,
    private faltaService: FaltaService
    ) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id']; 
    this.employeeId = this.id.toString(); 
    this.empleado = new Empleado();
    this.empleadoService.obtenerEmpleadoPorId(this.id).subscribe(dato => {
      this.empleado = dato;
      this.edad = this.calcularEdad(this.empleado.fechaNac);
      this.tiempo = this.calcularTiempo(this.empleado.fechaIngreso);
      this.tiempo2 = this.calcularTiempo2(this.empleado.fechaIngreso);
      this.url = this.irADireccion();
      this.obtenerListaFaltas(this.empleado.id);
      this.getEmployeeFiles();
      this.obtenerListaAntecedentesPorEmpleado(this.empleado.id);          
    });
  }

  

  editarEmpleado(id:number){
    localStorage.setItem("id",this.empleado.id.toString())
    this.router.navigate(['actualizar-empleado',id]);
  }

  editarAntecedentes(antecedente: AntecedentesEmpleado) {
    if (antecedente && antecedente.idAntecedentes) {
      localStorage.setItem("id", antecedente.idAntecedentes.toString());
      this.router.navigate(['editarAntecedentes', antecedente.idAntecedentes]);
    } else {
      // El antecedente no está definido o no tiene un ID válido
      // Realiza alguna acción apropiada, como mostrar un mensaje de error
      console.error('No se puede editar el antecedente');
    }
  }

  eliminarAntecedentes(idAntecedentes:number){
    
    this.antecedentesService.eliminarAntecedentesEmpleado(idAntecedentes).subscribe(dato =>{
      console.log(dato);
      this.obtenerListaAntecedentesPorEmpleado(this.empleado.id);       
    })
  }  

  calcularEdad(fechaNac: Date): number {
    const hoy = new Date();
    const fechaNacimientoObj = new Date(this.empleado.fechaNac);
    const diferencia = hoy.getTime() - fechaNacimientoObj.getTime();
    const edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365));
    return edad;
  }

  MostrarFechaInversa(fechaNac: Date): string {
    const fechaRec = new Date(fechaNac);
    var dia = fechaRec.getDate() +1;
    var mes = fechaRec.getMonth() + 1;
    var anio = fechaRec.getFullYear();
    var fechaForm = dia + "/" + mes + "/" + anio;
    return fechaForm;
  }  

  calcularDias(fechaInicial: Date, fechaFinal: Date): number {
    const milisegundosPorDia = 24 * 60 * 60 * 1000; // Número de milisegundos en un día
    const fechaInicio = new Date(fechaInicial); // Crear un nuevo objeto Date a partir de la fecha inicial
    const fechaFin = new Date(fechaFinal); // Crear un nuevo objeto Date a partir de la fecha final
  
    // Calcular la diferencia en días
    const diferencia = Math.round(Math.abs((fechaFin.getTime() - fechaInicio.getTime()) / milisegundosPorDia));
  
    return diferencia;
  }

  calcularTiempo(fechaIngreso: Date): number {
    const hoy = new Date();
    const fechaIngresoObj = new Date(this.empleado.fechaIngreso);
    const diferencia = hoy.getTime() - fechaIngresoObj.getTime();
    const tiempo = Math.floor(diferencia / (1000 * 60 * 60 * 24 ));
    return tiempo;
  }

  calcularTiempo2(fechaIngreso: Date): string {
    const hoy = new Date();
    const fechaIngresoObj = new Date(fechaIngreso);
    const diferencia = hoy.getTime() - fechaIngresoObj.getTime();
    const anios = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365 ));
    const meses = Math.floor((diferencia % (1000 * 60 * 60 * 24 * 365 )) / (1000 * 60 * 60 * 24 * 30));
  
    let tiempo2 = '';
    if (anios > 0) {
      tiempo2 += `${anios} año${anios > 1 ? 's' : ''}`;
    }
    if (meses > 0) {
      tiempo2 += `${anios > 0 ? ' y ' : ''}${meses} mes${meses > 1 ? 'es' : ''}`;
    }
  
    return tiempo2;
  }

  irADireccion(){
    const direccion = this.empleado.direccion;
    const direccionCodificada = encodeURIComponent(direccion);
    const url = `https://www.google.com/maps/search/?api=1&query=${direccionCodificada}`;
    return url;

  }

  private obtenerListaFaltas(id: number) {
    this.faltaService.obtenerFaltasPorEmpleado(id).subscribe(dato => {
      this.faltas = dato;
      this.cantidadFaltas = this.faltas.length;
  
      let totalDiasFaltados = 0;
      this.faltas.forEach(falta => {
        const fechaInicial = new Date(falta.fechaFaltaInicio);
        const fechaReincorporacion = new Date(falta.fechaFaltaFinal);
        const diffTime = fechaReincorporacion.getTime() - fechaInicial.getTime();
        const diasFaltados = Math.ceil(diffTime / (1000 * 3600 * 24));
        totalDiasFaltados += diasFaltados;
      });
  
      this.cantidadFaltasDias = totalDiasFaltados;
    });
  }

  private obtenerListaAntecedentesPorEmpleado(id: number) {
    this.antecedentesService.obtenerAntecedentesPorEmpleado(id).subscribe(dato => {
      this.antecedentes = dato;     
    });
  }
  
  guardarEstadoLaboral() {
    this.empleadoService.actualizarEstadoLaboral(this.empleado.id, this.empleado.estadoLaboral).subscribe(
      () => {
        console.log('Estado laboral actualizado correctamente');
      },
      (error) => {
        console.error('Error al actualizar el estado laboral:', error);
      }
    );
  }
  
  


  subirArchivos(id:number){
    localStorage.setItem("id",this.empleado.id.toString())
    this.router.navigate(['subirArchivos',id]);
  }

  getEmployeeFiles() {
    this.empleadoService.getEmployeeFiles(this.employeeId).subscribe(
      data => {
        this.empleadoFiles = data;
      },
      err => {
        console.log(err);
      });
  }

  openFile(employeeId: string, fileName: string) {
    this.empleadoService.openFile(employeeId, fileName);
  }

  openFile2(employeeId: string, idFalta: number, urlArchivo: string) {
    this.nombreArch = this.obtenerNombreArchivo(urlArchivo);
    this.empleadoService.openFile3(employeeId, idFalta, this.nombreArch);
  }

  openFile3(employeeId: number, idAntecedentes: number, urlArchivo: string) {
    this.nombreArch = this.obtenerNombreArchivo(urlArchivo);
    this.antecedentesService.openFile3(employeeId.toString(), idAntecedentes, this.nombreArch);
  }

  obtenerNombreArchivo(rutaArchivo: string): string {
    const partesRuta = rutaArchivo.split('/');
    return partesRuta[partesRuta.length - 1];
  }

  


  deleteFile(employeeId: string, fileName: string) {
    // Call the service method to delete the file
    this.empleadoService.deleteFile(employeeId, fileName).subscribe(
      (response) => {
          this.empleadoFiles = this.empleadoFiles.filter(f => f !== fileName);
       },
      (error) => {
        console.log(error);
      }
    );
    this.getEmployeeFiles();
   this.irDetallesEmpleado(this.id);   
  }

  irDetallesEmpleado(id:number){
    this.getEmployeeFiles();
    this.router.navigate(['editar',id]);
  }

  RegistrarAntecedentes(id:number){
    this.router.navigate(['registrarAntecedentes',id]);
  }

  obtenerUrlSegura(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  
       
  }

 
  
 

  
 

