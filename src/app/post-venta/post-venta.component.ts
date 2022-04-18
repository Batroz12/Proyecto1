import { Component, OnInit } from '@angular/core';
import { Cliente_Antiguo } from '../interfaces/cliente_antiguo';
import { Vehiculo_Vendidos } from '../interfaces/vehiculos_vendidos';
import { Concesionario } from '../interfaces/concesionario';

@Component({
  selector: 'app-post-venta',
  templateUrl: './post-venta.component.html',
  styleUrls: ['./post-venta.component.css']
})
export class PostVentaComponent {
  public ListaCliente: Cliente_Antiguo[]= [];
  public ListaVehiculo: Vehiculo_Vendidos[]= [];
  public ListaConcesionario: Concesionario[]= [];

  public clienteAntiguo: Cliente_Antiguo = {
    Nombre: "",
    Apellido: "",
    Email: "",
    Telefono: "",
  }
  public vehiculoVendido: Vehiculo_Vendidos = {
    Placa: "",
    Modelo: "",
  }
  public concesionario: Concesionario = {
    Sede: "",
    Servicio: "",
  }
  EnviarDatos(): void {
    this.ListaCliente.push(this.clienteAntiguo)
    this.ListaVehiculo.push(this.vehiculoVendido)
    this.ListaConcesionario.push(this.concesionario)
    console.log(this.clienteAntiguo)
    console.log(this.vehiculoVendido)
    console.log(this.concesionario)
  }
}
