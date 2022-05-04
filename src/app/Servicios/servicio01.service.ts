import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { Vehiculo } from '../interfaces/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class Servicio01Service {
  ListaCli: Cliente[]= [];
  ListaVehi: Vehiculo[]= [];
  constructor() { 
    
    }
  GuardarClienteService(cliente: Cliente): void{
    this.ListaCli.push(cliente);
    console.log(this.ListaCli);
    console.log(cliente);
  }
  GuardarVehiculoService(vehiculo: Vehiculo): void{
    this.ListaVehi.push(vehiculo);
    console.log(this.ListaVehi);
    console.log(vehiculo);
  }
}



