import { Component, OnInit } from '@angular/core';
import { Storage} from '@ionic/storage';

@Component({
  selector: 'app-cuarta',
  templateUrl: './cuarta.page.html',
  styleUrls: ['./cuarta.page.scss'],
})
export class CuartaPage implements OnInit {
  id:string = '';
  valor:string = '';
  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.create();
  }

  agregar()
  {
    this.storage.set(this.id,this.valor);
  }
}
