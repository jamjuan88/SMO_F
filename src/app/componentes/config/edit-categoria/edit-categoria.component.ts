import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/Service/categoria.service';
import { Categoria } from '../../model/Categoria';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.css']
})
export class EditCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria();

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private categoriaService:CategoriaService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');  
   console.log('ID categoria recuperado de la URL:', id);
   this.EditarCategoria(id);
  }

  EditarCategoria(id){   
    this.categoriaService.obtenerCategoriaPorID(id).subscribe(data => {
      this.categoria=data;
    });
    }

    ActualizarCategoria(){
      this.categoriaService.actualizarCategoria(this.categoria)
        .subscribe(data => {
          this.categoria=data;
          alert("Se actualizo los datos de la categoria");
          this.router.navigate(['config'])
  
        });
     }

}
