import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { ModelosComponent } from './modelos/modelos.component';
import { PostVentaComponent } from './post-venta/post-venta.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CotizacionComponent,
    ModelosComponent,
    PostVentaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    AppComponent,
    LoginComponent,
    CotizacionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
