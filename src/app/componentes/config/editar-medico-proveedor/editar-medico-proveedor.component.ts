import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AptitudesService } from 'src/app/Service/aptitudes.service';
import { MedicoProveedorService } from 'src/app/Service/medico-proveedor.service';
import { Aptitudes } from '../../model/Aptitudes';
import { MedicosProveedor } from '../../model/MedicosProveedor';
import { ProveedoresAptitudes } from '../../model/ProveedoresAptitudes';
import { ProveedorAptitudService } from 'src/app/Service/proveedor-aptitud.service';

@Component({
  selector: 'app-editar-medico-proveedor',
  templateUrl: './editar-medico-proveedor.component.html',
  styleUrls: ['./editar-medico-proveedor.component.css']
})
export class EditarMedicoProveedorComponent implements OnInit {

  aptitudes:Aptitudes[] = [];
  medicoProveedor: MedicosProveedor = new MedicosProveedor();
  proveedoresAptitudes:ProveedoresAptitudes[] = [];
  proveedoresAptitudes2: ProveedoresAptitudes = new ProveedoresAptitudes();
  idProveedorAptitud:number;
  

  constructor(private router: Router,
    private route: ActivatedRoute,
    private medicoProveedorService: MedicoProveedorService,
    private aptitudesService: AptitudesService,
    private proveedoresAptitudService: ProveedorAptitudService ) { }

  ngOnInit(): void {
    this.aptitudesService.listarAptitudes().subscribe(response => {this.aptitudes = response});
    const id = +this.route.snapshot.paramMap.get('id');  
   console.log('ID recuperado de la URL:', id);
   this.editarMedicoProveedor(id);
   this.proveedoresAptitudService.listarProveedorAptitudes().subscribe(response => {this.proveedoresAptitudes = response});
    this.obtenerListaProveedoresAptitud();
  }
  
  

  editarMedicoProveedor(id){   
    this.medicoProveedorService.obtenerMedicosProveedorPorID(id).subscribe(data => {
      this.medicoProveedor=data;
    });
    }

    ActualizarMedico(id:number){
      this.medicoProveedorService.actualizarMedicosProveedor(this.medicoProveedor)
        .subscribe(data => {
          this.medicoProveedor=data;
          alert("Se actualizo los datos de Médico Proveedor");
          this.router.navigate(['config'])
  
        });
     } 

     private obtenerListaProveedoresAptitud(){
      this.proveedoresAptitudService.listarProveedorAptitudes().subscribe(dato=>{
        this.proveedoresAptitudes = dato;
      })
    }

}
