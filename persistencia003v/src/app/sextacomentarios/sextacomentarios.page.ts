import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../sexta/apirest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sextacomentarios',
  templateUrl: './sextacomentarios.page.html',
  styleUrls: ['./sextacomentarios.page.scss'],
})
export class SextacomentariosPage implements OnInit {
  comentarios : any = [];
  constructor(private api: ApirestService,
              private activated: ActivatedRoute) { }

  ngOnInit() {
    this.activated.paramMap.subscribe(p => {
      const idPost = p.get('id')??'';
      this.api.getPostComments(idPost);
    })

  }
  ionViewDidEnter()
  {
    this.comentarios = this.api.comentarios;
  }

}
