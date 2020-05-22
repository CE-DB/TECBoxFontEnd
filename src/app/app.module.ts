import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';

import { AdminrolesComponent } from './adminroles/adminroles.component';
import { AdminsucursalesComponent } from './adminsucursales/adminsucursales.component';
import { AdmintrabajadoresComponent } from './admintrabajadores/admintrabajadores.component';
import { AdminvendedoresComponent } from './adminvendedores/adminvendedores.component';
import { AdminproductosComponent } from './adminproductos/adminproductos.component';
import { AdminrutasComponent } from './adminrutas/adminrutas.component';
import { BodegueropaquetesComponent } from './bodegueropaquetes/bodegueropaquetes.component';
import { BodeguerorastreoComponent } from './bodeguerorastreo/bodeguerorastreo.component';
import { ReportesproductosComponent } from './reportesproductos/reportesproductos.component';
import { ReportesrepartoComponent } from './reportesreparto/reportesreparto.component';
import { ReportesentregadoComponent } from './reportesentregado/reportesentregado.component';
import { InicioComponent } from './inicio/inicio.component';
import { CasilleroComponent } from './casillero/casillero.component';
import { RastreoComponent } from './rastreo/rastreo.component';
import { CompraComponent } from './compra/compra.component';

@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminrolesComponent,
    AdminsucursalesComponent,
    AdmintrabajadoresComponent,
    AdminvendedoresComponent,
    AdminproductosComponent,
    AdminrutasComponent,
    BodegueropaquetesComponent,
    BodeguerorastreoComponent,
    ReportesproductosComponent,
    ReportesrepartoComponent,
    ReportesentregadoComponent,
    InicioComponent,
    CasilleroComponent,
    RastreoComponent,
    CompraComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
