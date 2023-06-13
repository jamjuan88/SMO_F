import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/Service/categoria.service';
import { Categoria } from '../../model/Categoria';

@Component({
  selector: 'app-registrar-categoria',
  templateUrl: './registrar-categoria.component.html',
  styleUrls: ['./registrar-categoria.component.css']
})
export class RegistrarCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria();

  constructor(private categoriaService: CategoriaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  guardarCategoria(){
    this.categoriaService.guardarCategoria(this.categoria).subscribe(dato =>{
      console.log(dato);
      this.irAConfig();
    },error => console.log(error));
  }

  irAConfig(){
    this.router.navigate(['config']);
  }

  onSubmit(): void {
    this.guardarCategoria();
    
  }

}
