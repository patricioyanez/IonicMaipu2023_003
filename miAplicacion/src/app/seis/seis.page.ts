import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seis',
  templateUrl: './seis.page.html',
  styleUrls: ['./seis.page.scss'],
})
export class SeisPage implements OnInit {
  nombre  : string;
  edad    : number;
  mensaje : string = "Muy buen alumno";
  permitir: boolean = true;
  apellido: any;
 // json
  asignaturas = [
    { nombre : "Base de datos", nota: 39.55},
    { nombre : "Programación" , nota: 45},
    { nombre : "Matemática"   , nota: 33},
  ]

  constructor() {
    this.nombre = "Juan Díaz";
    this.edad = 25;
  }

  ngOnInit() {
  }

}
