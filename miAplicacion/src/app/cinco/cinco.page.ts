import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cinco',
  templateUrl: './cinco.page.html',
  styleUrls: ['./cinco.page.scss'],
})
export class CincoPage implements OnInit {
  numero : number; // sin inicializar
  numero2: number = 100;
  constructor(private alertController: AlertController) {
    this.numero = 0; // atributo inicializado
   }

  ngOnInit() {
  }
  async alerta()
  {
    console.log("Holaaa, el botón funciona :) 😊");
    const alert = await this.alertController.create({
        header : "Alert Controller 🎁",
        subHeader :"Sub Header",
        message:"Message",
        buttons:['Ok'],
    });
    await alert.present();
  }

  incrementar()
  {
    this.numero++;
    // this.numero += 1;
  }
}
