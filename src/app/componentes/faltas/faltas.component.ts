import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FaltaService } from 'src/app/Service/falta.service';
import { Falta } from '../model/Falta';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/empleado';
import { EmpleadoService } from 'src/app/empleado.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-faltas',
  templateUrl: './faltas.component.html',
  styleUrls: ['./faltas.component.css']
})
export class FaltasComponent implements OnInit {

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef<HTMLInputElement>;

 
  public archivoSeleccionado: File;

  idFalta:number;
  file: File | null = null;
  falta2 : Falta = new Falta();
  faltas2: Falta[] = [];
  
  faltas: Falta[] = [];
  empleados:Empleado[] = [];
  empleado:Empleado[];
  empleadoo:Empleado;
  term: string;
  urlArchivo: string;
  nombreArchivo: string; 
  extensionArchivo: string;
  nombreArch:string;
  employeeId = '';

  falta: Falta = {
    idFalta: null,
    fechaFaltaInicio: null,
    fechaFaltaFinal: null,
    tipoFalta: null,
    urlArchivo: null,
    descripcionFalta: null,
    empleado: null
  };

 
  


  constructor(private faltaService: FaltaService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
   this.empleadoService.obtenerListaDeEmpleados().subscribe(response => {this.empleados = response});
   this.obtenerListaFaltas();
  }

   guardarFalta(){
    if(this.falta.empleado.id == null){
      console.log("los campos estan vacios");
    }else
     this.faltaService.guardarFalta(this.falta).subscribe(dato =>{ 
     this.ngOnInit();    
     console.log(dato);
    },error => console.log(error));
  }

  guardarFalta2() {
    // Validar que se haya seleccionado un archivo
    if (!this.archivoSeleccionado) {
      // Mostrar mensaje de error o realizar alguna acción apropiada
      return;
    }

    this.faltaService.guardarFalta(this.falta).subscribe(
      (faltaGuardada: Falta) => {
        // Obtener el ID de la falta guardada
        const faltaId = faltaGuardada.idFalta;

        // Asignar el ID de la falta al objeto falta
        this.falta.idFalta = faltaId;

        // Realizar la solicitud de carga con el ID obtenido
        this.faltaService.guardarFaltaConArchivo2(this.falta, this.archivoSeleccionado, this.nombreArchivo, this.extensionArchivo).subscribe(
          response => {
                   
            // Lógica adicional después de guardar la falta y el archivo
            console.log('Falta y archivo guardados correctamente');
            // Realizar cualquier otra acción necesaria, como redirigir a otra página
          },
          error => {
            // Manejo de errores
            console.error('Error al guardar la falta y el archivo:', error);
          }
        );
      },
      
      error => {
        // Manejo de errores al guardar la falta
        console.error('Error al guardar la falta:', error);
      }
     );
     
   }
  
  
  obtenerUrlSegura(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  obtenerNombreArchivo(rutaArchivo: string): string {
    const partesRuta = rutaArchivo.split('/');
    return partesRuta[partesRuta.length - 1];
  }
  
  

  onFileSelected(event: any) {
    this.archivoSeleccionado = event.target.files[0];
    this.nombreArchivo = this.archivoSeleccionado.name;
    const extension = this.archivoSeleccionado.name.split('.').pop(); // Obtener la extensión del archivo
    this.extensionArchivo = extension;
  }

  openFile2(employeeId: number, idFalta: number, urlArchivo: string) {
    this.nombreArch = this.obtenerNombreArchivo(urlArchivo);
    this.empleadoService.openFile3(employeeId.toString(), idFalta, this.nombreArch);
  }
  

  MostrarFechaInversa(fechaInicioFalta: Date): string {
    const fechaRec = new Date(fechaInicioFalta);
    var dia = fechaRec.getDate() + 1;
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

   private obtenerEmpleados(){
    this.empleadoService.obtenerListaDeEmpleados().subscribe(dato=>{
      this.empleados = dato;
    })
  }

  ActualizarListaFaltas(){
    this.router.navigate(['faltas']);
  }

  private obtenerListaFaltas(){
    this.faltaService.obtenerFaltas().subscribe(dato=>{
      this.faltas = dato;
    })
  }

  verDetallesEmpleado(id:number){
    this.router.navigate(['editar',id]);
  }

  eliminarFalta(id:number){
    this.faltaService.eliminarFalta(id).subscribe(dato =>{
      console.log(dato);
      this.obtenerListaFaltas();
    })
  }

  editarFalta(id:number){
    this.router.navigate(['faltasEdit',id]);
  }

  subirArchivos(id:number){
    localStorage.setItem("id",this.empleadoo.id.toString())
    this.router.navigate(['subirArchivos',id]);
  }


}