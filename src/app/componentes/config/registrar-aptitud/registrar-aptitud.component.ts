import { Component, OnInit } from '@angular/core';
import { Aptitudes } from '../../model/Aptitudes';
import { AptitudesService } from 'src/app/Service/aptitudes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-aptitud',
  templateUrl: './registrar-aptitud.component.html',
  styleUrls: ['./registrar-aptitud.component.css']
})
export class RegistrarAptitudComponent implements OnInit {

  aptitud: Aptitudes = new Aptitudes();

  constructor(private router: Router,
    private aptitudService: AptitudesService) { }

  ngOnInit(): void {
  }

  
  guardarAptitud(){
    this.aptitudService.guardarAptitudes(this.aptitud).subscribe(dato =>{
      console.log(dato);
      this.irAConfig();
    },error => console.log(error));
  }

  irAConfig(){
    this.router.navigate(['config']);
  }

  onSubmit(): void {
    this.guardarAptitud();
    
  }
  
}
