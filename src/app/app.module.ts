
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { HttpClientModule } from '@angular/common/http';
import { EditarComponent } from './componentes/editar/editar.component';
import { FormsModule } from '@angular/forms';
import { ActualizarEmpleadoComponent } from './componentes/actualizar-empleado/actualizar-empleado.component';
import { ConfigComponent } from './componentes/config/config.component';
import { NavBarConfigComponent } from './componentes/config/nav-bar-config/nav-bar-config.component';
import { RegistrarEmpresaComponent } from './componentes/config/registrar-empresa/registrar-empresa.component';
import { EditEmpresaComponent } from './componentes/config/edit-empresa/edit-empresa.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrarPuestoComponent } from './componentes/config/registrar-puesto/registrar-puesto.component';
import { EditarPuestoComponent } from './componentes/config/editar-puesto/editar-puesto.component';
import { FaltasComponent } from './componentes/faltas/faltas.component';
import { FaltasEditComponent } from './componentes/faltas-edit/faltas-edit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SubirArchivosComponent } from './componentes/subir-archivos/subir-archivos.component';
import { MatCardModule } from '@angular/material/card';
import { RegistrarEstadoEmplComponent } from './componentes/config/registrar-estado-empl/registrar-estado-empl.component';
import { EditEstadoEmplComponent } from './componentes/config/edit-estado-empl/edit-estado-empl.component';
import { NgModule } from '@angular/core';
import { RegistrarCategoriaComponent } from './componentes/config/registrar-categoria/registrar-categoria.component';
import { EditCategoriaComponent } from './componentes/config/edit-categoria/edit-categoria.component';
import { RegistrarAntecedentesComponent } from './componentes/registrar-antecedentes/registrar-antecedentes.component';
import { RegistrarAptitudComponent } from './componentes/config/registrar-aptitud/registrar-aptitud.component';
import { EditarAptitudComponent } from './componentes/config/edit-aptitud/editar-aptitud.component';
import { RegistrarMedicoProveedorComponent } from './componentes/config/registrar-medico-proveedor/registrar-medico-proveedor.component';
import { EditarMedicoProveedorComponent } from './componentes/config/editar-medico-proveedor/editar-medico-proveedor.component';
import { RegistrarTipoDePreexistenciaComponent } from './componentes/config/registrar-tipo-de-preexistencia/registrar-tipo-de-preexistencia.component';
import { EditarrTipoDePreexistenciaComponent } from './componentes/config/editar-tipo-de-preexistencia/editarr-tipo-de-preexistencia.component';
import { RegistrarPreexistenciaComponent } from './componentes/config/registrar-preexistencia/registrar-preexistencia.component';
import { EditarPreexistenciaComponent } from './componentes/config/editar-preexistencia/editar-preexistencia.component';
import { EditarAntecedentesComponent } from './componentes/editar-antecedentes/editar-antecedentes.component';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    RegistrarComponent,
    EditarComponent,
    ActualizarEmpleadoComponent,
    ConfigComponent,
    NavBarConfigComponent,
    RegistrarEmpresaComponent,
    EditEmpresaComponent,
    RegistrarPuestoComponent,
    EditarPuestoComponent,
    FaltasComponent,
    FaltasEditComponent,
    SubirArchivosComponent,
    RegistrarEstadoEmplComponent,
    EditEstadoEmplComponent,
    RegistrarCategoriaComponent,
    EditCategoriaComponent,
    RegistrarAntecedentesComponent,
    RegistrarAptitudComponent,
    EditarAptitudComponent,
    RegistrarMedicoProveedorComponent,
    EditarMedicoProveedorComponent,
    RegistrarTipoDePreexistenciaComponent,
    EditarrTipoDePreexistenciaComponent,
    RegistrarPreexistenciaComponent,
    EditarPreexistenciaComponent,
    EditarAntecedentesComponent,
  
    
   
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
