import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../model/Empresa';
import { EmpresaService } from 'src/app/Service/empresa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-empresa',
  templateUrl: './registrar-empresa.component.html',
  styleUrls: ['./registrar-empresa.component.css']
})
export class RegistrarEmpresaComponent implements OnInit {

  empresa : Empresa = new Empresa();
  id:number;
  empresa2:Empresa;

  constructor(private empresaService: EmpresaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  guardarEmpresa(){
    this.empresaService.registrarEmpresa(this.empresa).subscribe(dato =>{
      console.log(dato);
      this.irListaEmpleados();
    },error => console.log(error));
  }

  irListaEmpleados(){
    this.router.navigate(['config']);
  }

  onSubmit(): void {
    this.guardarEmpresa();
    
  }


}
