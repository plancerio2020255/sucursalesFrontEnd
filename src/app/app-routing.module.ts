import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpresaComponent } from './components/agregar-empresa/agregar-empresa.component';
import { AgregarSucursalComponent } from './components/agregar-sucursal/agregar-sucursal.component';
import { EditarEmpresaComponent } from './components/editar-empresa/editar-empresa.component';
import { EditarSucursalComponent } from './components/editar-sucursal/editar-sucursal.component';
import { EliminarEmpresaComponent } from './components/eliminar-empresa/eliminar-empresa.component';
import { EliminarSucursalComponent } from './components/eliminar-sucursal/eliminar-sucursal.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { InicioComponent } from './components/inicio/inicio.component';
import {LoginComponent} from './components/login/login.component';
import { ProductoComponent } from './components/producto/producto.component';
import {RegisterComponent} from './components/register/register.component';
import { VerEmpresaComponent } from './components/ver-empresa/ver-empresa.component';
import { VerSucursalComponent } from './components/ver-sucursal/ver-sucursal.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  //Rutas de Productos
  {path: 'productos', component: ProductoComponent},
  //Rutas de empresas
  {path: 'Empresa', component: EmpresaComponent},
  {path: 'editarEmpresa', component: EditarEmpresaComponent},
  {path: 'agregarEmpresa', component: AgregarEmpresaComponent},
  {path: 'eliminarEmpresa', component: EliminarEmpresaComponent},
  {path: 'verEmpresa', component: VerEmpresaComponent},
  //Rutas de sucursales
  {path: 'editarSucursales', component: EditarSucursalComponent},
  {path: 'agregarSucursales', component: AgregarSucursalComponent},
  {path: 'eliminarSucursales', component: EliminarSucursalComponent},
  {path: 'verSucursales', component: VerSucursalComponent},
  {path:'', redirectTo:"/inicio", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
