import { Component, OnInit } from '@angular/core';
import { CrudService } from '../quinta/crud.service';

@Component({
  selector: 'app-quintalistado',
  templateUrl: './quintalistado.page.html',
  styleUrls: ['./quintalistado.page.scss'],
})
export class QuintalistadoPage implements OnInit {
  personas : any = [];
  constructor(private crud: CrudService) { }

// Ejercicio x: mostrar en una lista los datos
// almacenados en el storage.
  ngOnInit() {
    this.crud.listar().then(x => {this.personas = x});
  }
}
