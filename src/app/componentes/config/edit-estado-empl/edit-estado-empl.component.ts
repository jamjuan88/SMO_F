import { Component, OnInit } from '@angular/core';
import { EstadoLaboral } from '../../model/EstadoLaboral';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadoEmplService } from 'src/app/Service/estado-empl.service';

@Component({
  selector: 'app-edit-estado-empl',
  templateUrl: './edit-estado-empl.component.html',
  styleUrls: ['./edit-estado-empl.component.css']
})
export class EditEstadoEmplComponent implements OnInit {

  estado: EstadoLaboral = new EstadoLaboral;

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private estadoService: EstadoEmplService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');  
    console.log('ID recuperado de la URL:', id);
    this.EditarEstado(id);
  }

  EditarEstado(id){   
    this.estadoService.obtenerEstadoPorId(id).subscribe(data => {
      this.estado=data;
    });
    }

    ActualizarEstado(){
      this.estadoService.actualizarEstadoEmpl(this.estado)
        .subscribe(data => {
          this.estado=data;
          alert("Se actualizo los datos del Estado Laboral");
          this.router.navigate(['config'])  
        });
     }

}
