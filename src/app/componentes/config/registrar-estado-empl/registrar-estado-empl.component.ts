import { Component, OnInit } from '@angular/core';
import { EstadoLaboral } from '../../model/EstadoLaboral';
import { EstadoEmplService } from 'src/app/Service/estado-empl.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-estado-empl',
  templateUrl: './registrar-estado-empl.component.html',
  styleUrls: ['./registrar-estado-empl.component.css']
})
export class RegistrarEstadoEmplComponent implements OnInit {

  estado : EstadoLaboral = new EstadoLaboral();

  constructor(private estadoService: EstadoEmplService,
    private router: Router) { }

  ngOnInit(): void {
  }

  guardarEstado(){
    this.estadoService.registrarEstadoEmpl(this.estado).subscribe(dato =>{
      console.log(dato);
      this.irListaEstados();
    },error => console.log(error));
  }

  irListaEstados(){
    this.router.navigate(['config']);
  }


  onSubmit(): void {
    this.guardarEstado();
  }

}
