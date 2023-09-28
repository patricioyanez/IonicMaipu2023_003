import { Component, OnInit } from '@angular/core';
import { Storage} from '@ionic/storage';

@Component({
  selector: 'app-cuarta',
  templateUrl: './cuarta.page.html',
  styleUrls: ['./cuarta.page.scss'],
})
export class CuartaPage implements OnInit {

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.create();
  }

  agregar()
  {
    this.storage.set('1', 1000);
  }
}
