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
import { EditCategoriaComponent } from './componentes/config/edit-categoria/edit-categoria.component';
import { RegistrarCategoriaComponent } from './componentes/config/registrar-categoria/registrar-categoria.component';
import { RegistrarAntecedentesComponent } from './componentes/registrar-antecedentes/registrar-antecedentes.component';
import { RegistrarAptitudComponent } from './componentes/config/registrar-aptitud/registrar-aptitud.component';
import { EditarAptitudComponent } from './componentes/config/edit-aptitud/editar-aptitud.component';
import { RegistrarMedicoProveedorComponent } from './componentes/config/registrar-medico-proveedor/registrar-medico-proveedor.component';
import { EditarMedicoProveedorComponent } from './componentes/config/editar-medico-proveedor/editar-medico-proveedor.component';
import { RegistrarTipoDePreexistenciaComponent } from './componentes/config/registrar-tipo-de-preexistencia/registrar-tipo-de-preexistencia.component';
import { EditarrTipoDePreexistenciaComponent } from './componentes/config/editar-tipo-de-preexistencia/editarr-tipo-de-preexistencia.component';
import { EditarPreexistenciaComponent } from './componentes/config/editar-preexistencia/editar-preexistencia.component';
import { RegistrarPreexistenciaComponent } from './componentes/config/registrar-preexistencia/registrar-preexistencia.component';
import { EditarAntecedentesComponent } from './componentes/editar-antecedentes/editar-antecedentes.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'registrar', component: RegistrarComponent},
  { path: 'editar/:id', component: EditarComponent},
  { path: 'editarAntecedentes/:id', component: EditarAntecedentesComponent},
  { path: 'subirArchivos/:id', component: SubirArchivosComponent},
  { path: 'config', component: ConfigComponent},
  { path: 'config/editar/:id', component: EditEmpresaComponent},
  { path: 'config/EditPuesto/:id', component: EditarPuestoComponent},
  { path: 'config/EditTipoPreexistencia/:id', component: EditarrTipoDePreexistenciaComponent},
  { path: 'config/EditPreexistencia/:id', component: EditarPreexistenciaComponent}, 
  { path: 'config/EditAptitud/:id', component: EditarAptitudComponent},
  { path: 'config/EditMedicoProveedor/:id', component: EditarMedicoProveedorComponent},
  { path: 'config/EditCategoria/:id', component: EditCategoriaComponent},
  { path: 'config/EditEstado/:id', component: EditEstadoEmplComponent},
  { path: 'config/registrarEmpresa', component: RegistrarEmpresaComponent},
  { path: 'config/registrarMedicoProveedor', component: RegistrarMedicoProveedorComponent},
  { path: 'config/registrarCategoria', component: RegistrarCategoriaComponent},
  { path: 'config/registrarAptitud', component: RegistrarAptitudComponent},
  { path: 'config/registrarTipoPreexistencia', component: RegistrarTipoDePreexistenciaComponent},
  { path: 'config/registrarPreexistencia', component: RegistrarPreexistenciaComponent},
  
  { path: 'config/registrarPuesto', component: RegistrarPuestoComponent},
  { path: 'config/registrarEstado', component: RegistrarEstadoEmplComponent},
  { path: 'actualizar-empleado/:id', component: ActualizarEmpleadoComponent},
  { path: 'registrarAntecedentes/:id', component: RegistrarAntecedentesComponent},
  { path: '',redirectTo: 'home',pathMatch: 'full'},
  { path: 'faltas', component: FaltasComponent},
  { path: 'faltasEdit/:id', component: FaltasEditComponent}
  



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
