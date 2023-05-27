import { Component, OnInit } from '@angular/core';
import { Puesto } from '../../model/Puesto';
import { PuestoService } from 'src/app/Service/puesto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-puesto',
  templateUrl: './registrar-puesto.component.html',
  styleUrls: ['./registrar-puesto.component.css']
})
export class RegistrarPuestoComponent implements OnInit {

  puesto : Puesto = new Puesto();

  constructor(private puestoService: PuestoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  guardarPuesto(){
    this.puestoService.registrarPuesto(this.puesto).subscribe(dato =>{
      console.log(dato);
      this.irListaPuestos();
    },error => console.log(error));
  }

  irListaPuestos(){
    this.router.navigate(['config']);
  }

  onSubmit(): void {
    this.guardarPuesto();
  }
    
    }
