
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
