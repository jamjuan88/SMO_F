import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../model/Empresa';
import { EmpresaService } from 'src/app/Service/empresa.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { id } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-edit-empresa',
  templateUrl: './edit-empresa.component.html',
  styleUrls: ['./edit-empresa.component.css']
})
export class EditEmpresaComponent implements OnInit {

  empresas:Empresa[];

  empresa: Empresa = new Empresa();
  constructor(private router: Router, 
    private route: ActivatedRoute,
    private empresaService:EmpresaService) { }

  ngOnInit(): void {   
   const id = +this.route.snapshot.paramMap.get('id');  
   console.log('ID recuperado de la URL:', id);
   this.EditarEmpresa(id);
   }
   
   EditarEmpresa(id){   
    this.empresaService.obtenerEmpresaPorId(id).subscribe(data => {
      this.empresa=data;
    });
    }

    ActualizarEmpresa(){
      this.empresaService.actualizarEmpresa(this.empresa)
        .subscribe(data => {
          this.empresa=data;
          alert("Se actualizo los datos de la empresa");
          this.router.navigate(['config'])
  
        });
     }

}
