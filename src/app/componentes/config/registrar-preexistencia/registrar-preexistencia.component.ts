import { Component, OnInit } from '@angular/core';
import { Preexistencias } from '../../model/Preexistencias';
import { Router } from '@angular/router';
import { PreexistenciaService } from 'src/app/Service/preexistencia.service';

@Component({
  selector: 'app-registrar-preexistencia',
  templateUrl: './registrar-preexistencia.component.html',
  styleUrls: ['./registrar-preexistencia.component.css']
})
export class RegistrarPreexistenciaComponent implements OnInit {

  preexistencias: Preexistencias = new Preexistencias();

  constructor(private router: Router,
    private PreexService: PreexistenciaService) { }

  ngOnInit(): void {
  }
  
  guardarPreexistencia(){
    this.PreexService.guardarPreexistencia(this.preexistencias).subscribe(dato =>{
      console.log(dato);
      this.irListasConfig();
    },error => console.log(error));
  }

  irListasConfig(){
    this.router.navigate(['config']);
  }

  onSubmit(): void {
    this.guardarPreexistencia();
  }
}
