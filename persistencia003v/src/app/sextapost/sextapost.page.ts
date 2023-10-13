import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../sexta/apirest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sextapost',
  templateUrl: './sextapost.page.html',
  styleUrls: ['./sextapost.page.scss'],
})
export class SextapostPage implements OnInit {
  posts :any = []
  constructor(private api:ApirestService, 
              private activated: ActivatedRoute) { }

  ngOnInit() {
    this.activated.paramMap.subscribe(p =>{
      const idUsuario = p.get('id')??'';
       this.listar(idUsuario)
    });
  }
  async listar(idUsuario:any)
  {
      this.api.getUsersPost(idUsuario);
      //console.table(this.api.listado);
      this.posts = this.api.listado;
  }
}
