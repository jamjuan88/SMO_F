import { Component, OnInit } from '@angular/core';
import { Aptitudes } from '../../model/Aptitudes';
import { ActivatedRoute, Router } from '@angular/router';
import { AptitudesService } from 'src/app/Service/aptitudes.service';

@Component({
  selector: 'app-editar-aptitud',
  templateUrl: './editar-aptitud.component.html',
  styleUrls: ['./editar-aptitud.component.css']
})
export class EditarAptitudComponent implements OnInit {

  aptitud: Aptitudes = new Aptitudes();

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private aptitudService:AptitudesService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');  
    console.log('ID categoria recuperado de la URL:', id);
    this.EditarAptitud(id);
  }

  EditarAptitud(id){   
    this.aptitudService.obtenerAptitudesPorID(id).subscribe(data => {
      this.aptitud=data;
    });
    }

    ActualizarAptitud(){
      this.aptitudService.actualizarAptitudes(this.aptitud)
        .subscribe(data => {
          this.aptitud=data;
          alert("Se actualizo los datos de la Aptitud");
          this.router.navigate(['config'])
  
        });
     }


}
