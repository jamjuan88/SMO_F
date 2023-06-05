import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Empleado } from 'src/app/empleado';
import { EmpleadoService } from 'src/app/empleado.service';
import { Falta } from '../model/Falta';
import { FaltaService } from 'src/app/Service/falta.service';

@Component({
  selector: 'app-subir-archivos',
  templateUrl: './subir-archivos.component.html',
  styleUrls: ['./subir-archivos.component.css']
})
export class SubirArchivosComponent implements OnInit {

  empleadoFiles: string[];
  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  id:number;
  falta : Falta = new Falta();
  faltas: Falta[] = [];
  // Objeto para almacenar los valores del formulario
  file: File;
  fechaFaltaInicio: string = '';
  fechaFaltaFinal: string = '';
  descripcionFalta: string = '';
  tipoFalta: string = '';


  fileToUpload: File;
  employeeId = '';
  fileName = '';
  empleados:Empleado[] = [];
  empleado:Empleado[];
  empleadoo:Empleado;
  
  constructor(private empleadoService: EmpleadoService,
    private router: Router,
    private route:ActivatedRoute,
    private faltaService: FaltaService) { }

  ngOnInit(): void {
    this.Editar();
    this.id = this.route.snapshot.params['id'];
    this.employeeId = this.id.toString();
   
    console.log("Codigo del empleado: "+this.id);
    
    
  }

  

  handleFileInput(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.fileToUpload = target.files[0];
    }
  }
  

  uploadFile() {
    const originalFileName = this.fileToUpload.name;
    const fileExtension = originalFileName.split('.').pop();
    this.fileName = this.fileName + "." + fileExtension;
    this.progressInfos[File.name] = { value: 0, fileName: File.name };
    this.empleadoService.upload(this.fileToUpload, this.employeeId, this.fileName).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressInfos[File.name].value = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message.push(event.body.message);
        }
      this.ngOnInit();  
      this.irDetallesEmpleado(this.id);
      },
      err => {
        this.progressInfos[File.name].value = 0;
        this.message.push('Could not upload the file:' + File.name);
      });     

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

  irDetallesEmpleado(id:number){
    this.getEmployeeFiles();
    this.router.navigate(['editar',id]);
  }

  Editar(){
    let id=localStorage.getItem('id');
    this.empleadoService.obtenerEmpleadoPorId(+id)
    .subscribe(data => {
      this.empleadoo=data;
    });
 }
 
  
  
  
  


 

  
}




