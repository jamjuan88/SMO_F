import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoDePreexistenciaService } from 'src/app/Service/tipo-de-preexistencia.service';
import { TipoPreexistencia } from '../../model/TipoPreexistencia';

@Component({
  selector: 'app-registrar-tipo-de-preexistencia',
  templateUrl: './registrar-tipo-de-preexistencia.component.html',
  styleUrls: ['./registrar-tipo-de-preexistencia.component.css']
})
export class RegistrarTipoDePreexistenciaComponent implements OnInit {

  tipoPreex: TipoPreexistencia = new TipoPreexistencia();

  constructor(private router: Router,
    private tipoDePreexService: TipoDePreexistenciaService
    ) { }

  ngOnInit(): void {
  }

  guardartipoDePreexistencia(){
    this.tipoDePreexService.guardarTipoPreexistencia(this.tipoPreex).subscribe(dato =>{
      console.log(dato);
      this.irListasConfig();
    },error => console.log(error));
  }

  irListasConfig(){
    this.router.navigate(['config']);
  }

  onSubmit(): void {
    this.guardartipoDePreexistencia();
  }

}
