import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-siete',
  templateUrl: './siete.page.html',
  styleUrls: ['./siete.page.scss'],
})
export class SietePage implements OnInit {
  nombre = 'Diego';
  nombre2= 'María';

  n1 = '';
  n2 = '';
  resultado : any;
  constructor() { }

  ngOnInit() {
  }

  sumar()
  {
    this.resultado=
      this.n1+this.n2;
  }
}
