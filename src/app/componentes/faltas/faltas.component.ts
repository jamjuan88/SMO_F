import { Component, OnInit } from '@angular/core';
import { FaltaService } from 'src/app/Service/falta.service';
import { Falta } from '../model/Falta';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/empleado';
import { EmpleadoService } from 'src/app/empleado.service';

@Component({
  selector: 'app-faltas',
  templateUrl: './faltas.component.html',
  styleUrls: ['./faltas.component.css']
})
export class FaltasComponent implements OnInit {
  id:number;
  selectedFile: File;
  file: File | null = null;
  falta2 : Falta = new Falta();
  faltas2: Falta[] = [];
  falta : Falta = new Falta();
  faltas: Falta[] = [];
  empleados:Empleado[] = [];
  empleado:Empleado[];
  empleadoo:Empleado;
  term: string;


  constructor(private faltaService: FaltaService,
    private router: Router,
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

  guardarFaltaConArchivo(file: File, falta: any) {
    this.faltaService.guardarFaltaConArchivo(file, falta).subscribe(
      (response) => {
        // La falta y el archivo se guardaron correctamente
        console.log('Falta y archivo guardados correctamente');
      },
      (error) => {
        // Ocurrió un error al guardar la falta y el archivo
        console.error('Error al guardar la falta y el archivo:', error);
      }
    );
  }
    

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
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
  



