import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CasilleroComponent } from './casillero/casillero.component';
import { RastreoComponent } from './rastreo/rastreo.component';
import { CompraComponent } from './compra/compra.component';
import { AdminproductosComponent } from './adminproductos/adminproductos.component';
import { AdminrolesComponent } from './adminroles/adminroles.component';
import { AdminsucursalesComponent } from './adminsucursales/adminsucursales.component';
import { AdminrutasComponent } from './adminrutas/adminrutas.component';
import { AdmintrabajadoresComponent } from './admintrabajadores/admintrabajadores.component';
import { AdminvendedoresComponent } from './adminvendedores/adminvendedores.component';
import { BodegueropaquetesComponent } from './bodegueropaquetes/bodegueropaquetes.component';
import { BodeguerorastreoComponent } from './bodeguerorastreo/bodeguerorastreo.component';
import { ReportesentregadoComponent } from './reportesentregado/reportesentregado.component';
import { ReportesproductosComponent } from './reportesproductos/reportesproductos.component';
import { ReportesrepartoComponent } from './reportesreparto/reportesreparto.component';


const routes: Routes = [
  {path: "", redirectTo: "inicio", pathMatch: "full"},
  {path: "inicio", component: InicioComponent},
  {path: "casillero", component: CasilleroComponent},
  {path: "rastreo", component: RastreoComponent},
  {path: "compra", component: CompraComponent},
  {path: "admin", 
  children: [
    {path: "", pathMatch: "full", redirectTo: "productos"},
    {path: "productos", component: AdminproductosComponent},
    {path: "roles", component: AdminrolesComponent},
    {path: "rutas", component: AdminrutasComponent},
    {path: "sucursales", component: AdminsucursalesComponent},
    {path: "trabajadores", component: AdmintrabajadoresComponent},
    {path: "vendedores", component: AdminvendedoresComponent}
  ]},
  {path: "bodeguero", children: [
    {path: "", pathMatch: "full", redirectTo: "paquetes"},
    {path: "paquetes", component: BodegueropaquetesComponent},
    {path: "rastreo", component: BodeguerorastreoComponent}
  ]},
  {path: "reporte", children: [
    {path: "", pathMatch: "full", redirectTo: "entregado"},
    {path: "entregado", component: ReportesentregadoComponent},
    {path: "productos", component: ReportesproductosComponent},
    {path: "reparto", component: ReportesrepartoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
