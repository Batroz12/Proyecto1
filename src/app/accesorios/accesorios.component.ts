import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Accesorio } from '../interfaces/accesorio';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.css']
})
export class AccesoriosComponent {
  // @Input() accesoriogg: Accesorio={
  //   nombre:'',
  //   imagen:'',
  //   precio:''
  // }

   // .................................................... AUTOS ......................................................//
// .................................................... AUTO01 ......................................................//
 public Accesorio01: Accesorio = {
   nombre: "Reproductor",
   imagen: "https://cdn.autoteiledirekt.de/thumb?id=15750846&m=0&n=0&lng=es&rev=94077826",
   precio: "S/2100"
 };
 // .................................................... AUTO02 ......................................................//
 public Accesorio02: Accesorio = {
   nombre: "Tapabucos",
   imagen: "https://media.autoteiledirekt.de/360_photos/16368508/preview.jpg",
   precio: "S/2680"
 };
 // .................................................... AUTO03 ......................................................//
 public Accesorio03: Accesorio = {
   nombre: "Cubre Asientos",
   imagen: "https://cdn.autoteiledirekt.de/thumb?id=13626718&m=0&n=0&lng=es&rev=94077826",
   precio: "S/280"
 };
 // .................................................... AUTO04 ......................................................//
 public Accesorio04: Accesorio = {
 nombre: "Cable de Carga",
 imagen: "https://cdn.autoteiledirekt.de/thumb?id=17835260&m=0&n=0&lng=es&rev=94077826",
 precio: "S/900"

 };
 // .................................................... AUTO05 ......................................................//
 public Accesorio05: Accesorio = {
 nombre: "Luz Advertencia",
 imagen: "https://cdn.autoteiledirekt.de/thumb?id=17165369&m=0&n=0&lng=es&rev=94077826",
 precio: "S/3960"
 };
 // .................................................... AUTO06 ......................................................//
 public Accesorio06: Accesorio = {
 nombre: "Cuña de Ruedas",
 imagen: "https://cdn.autoteiledirekt.de/thumb?id=14347350&m=0&n=0&lng=es&rev=94077826",
 precio: "S/990"
 };
 public estadoBoton: boolean = false;

 onDatos(): void {
 console.log(this.Accesorio01);
 console.log(this.Accesorio02);
 console.log(this.Accesorio03);
 console.log(this.Accesorio04);
 console.log(this.Accesorio05);
 console.log(this.Accesorio06);
 }
}

