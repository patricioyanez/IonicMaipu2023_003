import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

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
  constructor(private toastController:ToastController) { }

  ngOnInit() {
  }

  async sumar()
  {
    this.resultado=this.n1+this.n2;

    const toast = await this.toastController.create({
      message   :'El valor de la operación es '+this.resultado+'!',
      duration  : 3000,
      position  : 'bottom',
      color     : 'success'
    });
    await toast.present();
  }

  // Crear las operaciones aritmeticas *,/ y -, validando los numero enviado mensaje adecuado

    // Ejercicios 2:
  // crear una nueva pagina que permita calculador el promedio de 3 notas,
  // mostrar si aprobó o no, según resultado obtenido.
  // usar alert si reprueba y toast si aprueba.


}
