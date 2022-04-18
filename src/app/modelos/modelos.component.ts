// import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Auto } from '../interfaces/auto';
@Component({
   selector: 'app-modelos',
   templateUrl: './modelos.component.html',
   styleUrls: ['./modelos.component.css']
})
// export class ModelosComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }




export class ModelosComponent {
 // .................................................... AUTOS ......................................................//
// .................................................... AUTO01 ......................................................//
  public Auto01: Auto = {
    nombre: "4Runner",
    imagen: "https://www.toyotaperu.com.pe/sites/default/files/camioneta-4Runner-Toyota-4x4.png",
    precio: "S/23100"
  };
// .................................................... AUTO02 ......................................................//
  public Auto02: Auto = {
    nombre: "Avanza",
    imagen: "https://www.toyotaperu.com.pe/sites/default/files/avanza-listado_0.png",
    precio: "S/82680"
  };
// .................................................... AUTO03 ......................................................//
  public Auto03: Auto = {
    nombre: "Hilux",
    imagen: "https://www.toyotaperu.com.pe/sites/default/files/HILUX.png",
    precio: "S/160280"
  };
// .................................................... AUTO04 ......................................................//
public Auto04: Auto = {
  nombre: "Camaro",
  imagen: "https://d33cpcpynwss7s.cloudfront.net/wp-content/uploads/2019/11/camaro.png",
  precio: "S/230900"
  
};
// .................................................... AUTO05 ......................................................//
public Auto05: Auto = {
  nombre: "Lexus RX",
  imagen: "https://cdn.wheel-size.com/automobile/body/lexus-rx-2019-2021-1589785390.1972506.png",
  precio: "S/123960"
};
// .................................................... AUTO06 ......................................................//
public Auto06: Auto = {
  nombre: "Dodge",
  imagen: "https://www.manualesdetodo.net/wp-content/uploads/2020/01/Challenger2018.png.webp",
  precio: "S/13990"
};
public estadoBoton: boolean = false;

onDatos(): void {
  console.log(this.Auto01);
  console.log(this.Auto02);
  console.log(this.Auto03);
  console.log(this.Auto04);
  console.log(this.Auto05);
  console.log(this.Auto06);
}
}
