import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.page.html',
  styleUrls: ['./segunda.page.scss'],
})
export class SegundaPage implements OnInit {
  valorParametro: any;
  constructor(private activated:ActivatedRoute) { }

  ngOnInit() { // se ejecuta antes del render y solo una vez.
    this.valorParametro = this.activated.snapshot.paramMap.get('valor');
  }
}
