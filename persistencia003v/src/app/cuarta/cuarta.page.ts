import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage} from '@ionic/storage';

@Component({
  selector: 'app-cuarta',
  templateUrl: './cuarta.page.html',
  styleUrls: ['./cuarta.page.scss'],
})
export class CuartaPage implements OnInit {
  id:string = '';
  valor:string = '';
  constructor(private storage: Storage,
    private alert: AlertController) { }

  ngOnInit() {
    this.storage.create();
  }

  agregar()
  {
    if(!this.id)
      this.mensajeAlerta('Falta el id');
    else if(!this.valor)
      this.mensajeAlerta('Falta el valor');
    else
    {
      this.storage.set(this.id,this.valor);
      this.id = this.valor = ""; // limpiar form
    }
  }

  async mensajeAlerta(mensaje: string)
  {
    const a = await this.alert.create({
                header    : 'Error',
                subHeader : 'Mensaje de error',
                message   : mensaje,
                buttons   : ['Aceptar']
              });
    a.present();
  }
}
