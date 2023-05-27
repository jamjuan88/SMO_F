import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { ActualizarEmpleadoComponent } from './componentes/actualizar-empleado/actualizar-empleado.component';
import { ConfigComponent } from './componentes/config/config.component';
import { RegistrarEmpresaComponent } from './componentes/config/registrar-empresa/registrar-empresa.component';
import { EditEmpresaComponent } from './componentes/config/edit-empresa/edit-empresa.component';
import { EditarPuestoComponent } from './componentes/config/editar-puesto/editar-puesto.component';
import { RegistrarPuestoComponent } from './componentes/config/registrar-puesto/registrar-puesto.component';
import { FaltasComponent } from './componentes/faltas/faltas.component';
import { FaltasEditComponent } from './componentes/faltas-edit/faltas-edit.component';
import { SubirArchivosComponent } from './componentes/subir-archivos/subir-archivos.component';
import { EditEstadoEmplComponent } from './componentes/config/edit-estado-empl/edit-estado-empl.component';
import { RegistrarEstadoEmplComponent } from './componentes/config/registrar-estado-empl/registrar-estado-empl.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'registrar', component: RegistrarComponent},
  { path: 'editar/:id', component: EditarComponent},
  { path: 'subirArchivos/:id', component: SubirArchivosComponent},
  { path: 'config', component: ConfigComponent},
  { path: 'config/editar/:id', component: EditEmpresaComponent},
  { path: 'config/EditPuesto/:id', component: EditarPuestoComponent},
  { path: 'config/EditEstado/:id', component: EditEstadoEmplComponent},
  { path: 'config/registrarEmpresa', component: RegistrarEmpresaComponent},
  { path: 'config/registrarPuesto', component: RegistrarPuestoComponent},
  { path: 'config/registrarEstado', component: RegistrarEstadoEmplComponent},
  { path: 'actualizar-empleado/:id', component: ActualizarEmpleadoComponent},
  { path: '',redirectTo: 'home',pathMatch: 'full'},
  { path: 'faltas', component: FaltasComponent},
  { path: 'faltasEdit/:id', component: FaltasEditComponent}
  



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
