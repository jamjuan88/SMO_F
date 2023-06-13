import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicoProveedorService } from 'src/app/Service/medico-proveedor.service';
import { MedicosProveedor } from '../../model/MedicosProveedor';
import { ProveedoresAptitudes } from '../../model/ProveedoresAptitudes';
import { ProveedorAptitudService } from 'src/app/Service/proveedor-aptitud.service';

@Component({
  selector: 'app-registrar-medico-proveedor',
  templateUrl: './registrar-medico-proveedor.component.html',
  styleUrls: ['./registrar-medico-proveedor.component.css']
})
export class RegistrarMedicoProveedorComponent implements OnInit {

  medicoProveedor: MedicosProveedor = new MedicosProveedor;
  proveedoresAptitudes: ProveedoresAptitudes[] = [];
  proveedorAptitud:ProveedoresAptitudes[] = [];
  
  constructor( private router: Router,
    private medicoProveedorService: MedicoProveedorService,
    private proveedoresAptitudService: ProveedorAptitudService
    ) { }

  ngOnInit(): void {
    this.proveedoresAptitudService.listarProveedorAptitudes().subscribe(response => {this.proveedorAptitud = response});
    this.obtenerListaProveedoresAptitud();
  }

  
  guardarMedicoProveedor(){
    this.medicoProveedorService.guardarMedicosProveedor(this.medicoProveedor).subscribe(dato =>{
      console.log(dato);
      this.irAConfig();
    },error => console.log(error));
  }

  private obtenerListaProveedoresAptitud(){
    this.proveedoresAptitudService.listarProveedorAptitudes().subscribe(dato=>{
      this.proveedoresAptitudes = dato;
    })
  }

  irAConfig(){
    this.router.navigate(['config']);
  }

  onSubmit(): void {
    this.guardarMedicoProveedor();
    
  }

}
