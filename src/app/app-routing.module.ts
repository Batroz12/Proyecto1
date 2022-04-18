import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { LoginComponent } from './login/login.component';
import { ModelosComponent } from './modelos/modelos.component';
import { PostVentaComponent } from './post-venta/post-venta.component';
import { MenuComponent } from './menu/menu.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { RepuestosComponent } from './repuestos/repuestos.component';

const routes: Routes =[
  {path:'', component: MenuComponent},
  {path:'menu', component: MenuComponent},
  {path:'login', component: LoginComponent},
  {path:'cotizacion', component: CotizacionComponent},
  {path:'modelos', component: ModelosComponent},
  {path:'accesorios', component: AccesoriosComponent},
  {path:'repuestos', component: RepuestosComponent},
  {path:'postventa', component: PostVentaComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}