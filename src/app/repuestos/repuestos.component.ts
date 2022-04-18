import { Component } from '@angular/core';
import { Repuesto } from '../interfaces/repuesto';

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.component.html',
  styleUrls: ['./repuestos.component.css']
})
export class RepuestosComponent {
   // .................................................... AUTOS ......................................................//
// .................................................... AUTO01 ......................................................//
public Repuesto01: Repuesto = {
  nombre: "LLantas PCR",
  imagen: "https://www.imporcadi.com/wp-content/uploads/2021/07/llanta-trailer.png",
  precio: "S/400"
};
// .................................................... REPUESTO02 ......................................................//
public Repuesto02: Repuesto = {
  nombre: "Timones",
  imagen: "https://www.nicepng.com/png/full/338-3380707_mazda-gt-custom-steering-wheel.png",
  precio: "S/680"
};
// .................................................... REPUESTO03 ......................................................//
public Repuesto03: Repuesto = {
  nombre: "Faroles",
  imagen: "https://scdn.autoersatzteile.de/catalog/categories/513x196/27.png?rev=94077826",
  precio: "S/1280"
};
// .................................................... REPUESTO04 ......................................................//
public Repuesto04: Repuesto = {
nombre: "Pedales",
imagen: "https://www.apex.mx/wp-content/uploads/2015/06/pedales-fanatec-2.png",
precio: "S/2900"

};
// .................................................... REPUESTO05 ......................................................//
public Repuesto05: Repuesto = {
nombre: "Aceleron",
imagen: "https://s.alicdn.com/@sc04/kf/H13f2ba79b83748559160981e67597059H.png_300x300.png",
precio: "S/3960"
};
// .................................................... REPUESTO06 ......................................................//
public Repuesto06: Repuesto = {
nombre: "Alfombra",
imagen: "https://motocarpanama.com/wp-content/uploads/2021/04/1619709123_ALFOMBRAS.png",
precio: "S/990"
};
public estadoBoton: boolean = false;

onDatos(): void {
console.log(this.Repuesto01);
console.log(this.Repuesto02);
console.log(this.Repuesto03);
console.log(this.Repuesto04);
console.log(this.Repuesto05);
console.log(this.Repuesto06);
}
}
