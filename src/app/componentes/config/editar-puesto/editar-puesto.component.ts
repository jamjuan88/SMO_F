import { Component, OnInit } from '@angular/core';
import { Puesto } from '../../model/Puesto';
import { PuestoService } from 'src/app/Service/puesto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-puesto',
  templateUrl: './editar-puesto.component.html',
  styleUrls: ['./editar-puesto.component.css']
})
export class EditarPuestoComponent implements OnInit {

 
  puesto: Puesto = new Puesto();

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private puestoService:PuestoService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');  
   console.log('ID recuperado de la URL:', id);
   this.EditarPuesto(id);
  }

  EditarPuesto(id){   
    this.puestoService.obtenerPuestoPorId(id).subscribe(data => {
      this.puesto=data;
    });
    }

    ActualizarPuesto(){
      this.puestoService.actualizarPuesto(this.puesto)
        .subscribe(data => {
          this.puesto=data;
          alert("Se actualizo los datos del puesto");
          this.router.navigate(['config'])  
        });
     }
}
