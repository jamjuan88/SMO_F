import { Component, OnInit } from '@angular/core';
import { TipoPreexistencia } from '../../model/TipoPreexistencia';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoDePreexistenciaService } from 'src/app/Service/tipo-de-preexistencia.service';

@Component({
  selector: 'app-editarr-tipo-de-preexistencia',
  templateUrl: './editarr-tipo-de-preexistencia.component.html',
  styleUrls: ['./editarr-tipo-de-preexistencia.component.css']
})
export class EditarrTipoDePreexistenciaComponent implements OnInit {

  tipoPreex: TipoPreexistencia = new TipoPreexistencia();

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private tipoPreexService: TipoDePreexistenciaService ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');  
    console.log('ID recuperado de la URL:', id);
    this.EditarTipoDePreex(id);
  }

  EditarTipoDePreex(id){   
    this.tipoPreexService.obtenerTipoPreexistenciaPorId(id).subscribe(data => {
      this.tipoPreex=data;
    });
    }

    ActualizarTipoDePreex(){
      this.tipoPreexService.actualizarTipoPreexistencia(this.tipoPreex)
        .subscribe(data => {
          this.tipoPreex=data;
          alert("Se actualizo los datos del tipo de Preexistencia");
          this.router.navigate(['config'])  
        });
     }  

}
