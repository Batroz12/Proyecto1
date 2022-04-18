import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { LoginComponent } from './login/login.component';
import { ModelosComponent } from './modelos/modelos.component';
import { PostVentaComponent } from './post-venta/post-venta.component';

const routes: Routes =[
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'cotizacion', component: CotizacionComponent},
  {path:'modelos', component: ModelosComponent},
  {path:'postventa', component: PostVentaComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
