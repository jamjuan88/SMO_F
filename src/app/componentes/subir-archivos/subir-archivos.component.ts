import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Empleado } from 'src/app/empleado';
import { EmpleadoService } from 'src/app/empleado.service';

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

  fileToUpload: File;
  employeeId = '';
  fileName = '';
  empleado: Empleado[] = [];
  empleados: Empleado = new Empleado();

  constructor(private empleadoService: EmpleadoService,
    private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.Editar();
    this.id = this.route.snapshot.params['id'];
    this.employeeId = this.id.toString();
   
    console.log("Codigo del empleado: "+this.id);
    
    
  }

  selectFile(event: any): void {
    const target = event.target as HTMLInputElement;
    this.selectedFiles = target.files;
  }

  handleFileInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.fileToUpload = target.files.item(0);
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
      this.empleados=data;
    });
 }
 
  
  
  
  


 

  
}




