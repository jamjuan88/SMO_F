import { Component, OnInit } from '@angular/core';
import { Preexistencias } from '../../model/Preexistencias';
import { ActivatedRoute, Router } from '@angular/router';
import { PreexistenciaService } from 'src/app/Service/preexistencia.service';

@Component({
  selector: 'app-editar-preexistencia',
  templateUrl: './editar-preexistencia.component.html',
  styleUrls: ['./editar-preexistencia.component.css']
})
export class EditarPreexistenciaComponent implements OnInit {

  Preexistencia: Preexistencias = new Preexistencias();

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private PreexService: PreexistenciaService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');  
    console.log('ID recuperado de la URL:', id);
    this.EditarPreex(id);
  }

  
  EditarPreex(id){   
    this.PreexService.obtenerPreexistenciaPorId(id).subscribe(data => {
      this.Preexistencia=data;
    });
    }

    ActualizarPreex(){
      this.PreexService.actualizarPreexistencia(this.Preexistencia)
        .subscribe(data => {
          this.Preexistencia=data;
          alert("Se actualizo los datos del tipo de Preexistencia");
          this.router.navigate(['config'])  
        });
     }

}
