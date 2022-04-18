import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { Vehiculo } from '../interfaces/vehiculo';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent  {
  public ListaCli: Cliente[]= [];
  public ListaVehi: Vehiculo[]= [];

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
    this.ListaCli.push(this.cliente)
    this.ListaVehi.push(this.vehiculo)
    console.log(this.cliente);
    // console.log(this.ListaCli);
    // console.log(this.vehiculo);
    console.log(this.ListaVehi);
  }
}
