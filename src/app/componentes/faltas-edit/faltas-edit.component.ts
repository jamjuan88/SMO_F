import { Component, OnInit } from '@angular/core';
import { Falta } from '../model/Falta';
import { ActivatedRoute, Router } from '@angular/router';
import { FaltaService } from 'src/app/Service/falta.service';
import { Empleado } from 'src/app/empleado';
import { EmpleadoService } from 'src/app/empleado.service';

@Component({
  selector: 'app-faltas-edit',
  templateUrl: './faltas-edit.component.html',
  styleUrls: ['./faltas-edit.component.css']
})
export class FaltasEditComponent implements OnInit {

  falta: Falta[];
  faltas: Falta = new Falta();
  empleados:Empleado[] = [];
  empleado:Empleado[];
 

  constructor(private router: Router,
    private route: ActivatedRoute,
    private faltaService: FaltaService,
    private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.empleadoService.obtenerListaDeEmpleados().subscribe(response => {this.empleados = response});
    const id = +this.route.snapshot.paramMap.get('id');  
   console.log('ID recuperado de la URL:', id);
   this.editarFalta(id);
  }

  editarFalta(id){   
    this.faltaService.obtenerFaltaPorId(id).subscribe(data => {
      this.faltas=data;
    });
    }
  

   Actualizar(id:number){
      this.faltaService.actualizarFalta(this.faltas)
        .subscribe(data => {
          this.faltas=data;
          alert("Se actualizo los datos de la Falta");
          this.router.navigate(['home'])
  
        });
     }
  

}
