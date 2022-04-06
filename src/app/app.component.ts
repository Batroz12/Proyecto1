import { Component } from '@angular/core';
import { Cliente } from './interfaces/cliente';
import { Vehiculo } from './interfaces/vehiculo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cliente: Cliente = {
    Dni: "",
    Nombre: "",
    Apellido: "",
    Email: "",
    Telefono: "",
    Departamento: ""
  }
  public vehiculo: Vehiculo = {
    Marca: "",
    Estado: "",
    Modelo: "",
    Version: "",
  }
  GuardarDatos(): void {
    this.cliente.Dni="DNI ingresado";
    this.cliente.Nombre="Nombre ingresado";
    this.cliente.Apellido="Apellido ingresado";
    this.cliente.Email="Email ingresado";
    this.cliente.Telefono="Telefono ingresado";
    this.cliente.Departamento="Departamento seleccionado";
    this.vehiculo.Marca="Marca seleccionada";
    this.vehiculo.Estado="Estado seleccionada";
    this.vehiculo.Modelo="Modelo seleccionado";
    this.vehiculo.Version="Version seleccionada";
    console.log(this.cliente);
    console.log(this.vehiculo);
  }
}
