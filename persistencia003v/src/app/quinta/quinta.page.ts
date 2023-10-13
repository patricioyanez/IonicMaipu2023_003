import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quinta',
  templateUrl: './quinta.page.html',
  styleUrls: ['./quinta.page.scss'],
})
export class QuintaPage implements OnInit {
  persona : any = [];
  constructor(private crud: CrudService,
    private toast : ToastController,
    private router: Router,
    private activated: ActivatedRoute) { }

  ngOnInit() {
    this.activated.paramMap.subscribe(paramMap =>{
      let rut = paramMap.get('id')??'';
      this.crud.leer(rut).then(x => {this.persona = x})
    });
  }
  async agregar()
  {
// Ejercicio 1: Validar todos los datos  antes de guardar
// usar TOAST rojo error y verde guardado.
    if(!this.persona.rut)
      this.mensajeError('Falta el Rut');
    else if(!this.persona.nombre)
      this.mensajeError('Falta el Nombre');
    else if(!this.persona.direccion)
      this.mensajeError('Falta el Dirección');
    else if(!this.persona.correo)
      this.mensajeError('Falta el Correo');
    else if(!this.persona.telefono)
      this.mensajeError('Falta el teléfono');
    else if(!this.persona.anioNacimiento)
      this.mensajeError('Falta Año de Nacimiento');
    else
    {
      this.crud.guardar(this.persona.rut, this.persona);
      this.mensajeExito('Persona fue guardada');
      this.persona = []; // limpia
    }
  }
// Ejercicio 2: Terminar el crud para los datos de persona
  async mensajeError(mensaje: string)
  {
    const t = await this.toast.create({
      message : mensaje,
      color   : 'danger',
      icon    : 'alert-outline',
      duration: 3000,
      buttons : ['Aceptar'],
      // position: 'middle'
    });
    t.present();
  }
  async mensajeExito(mensaje: string)
  {
    const t = await this.toast.create({
      message : mensaje,
      color   : 'success',
      icon    : 'checkmark-circle-outline',
      duration: 3000,
      buttons : ['Aceptar']
    });
    t.present();
  }
  async leer()
   {
    if(!this.persona.rut)
      this.mensajeError('Falta el Rut');
    else{
      await this.crud.leer(this.persona.rut).
                then( x=> { this.persona = x})
      if(!this.persona)
      {
        this.mensajeError('Rut no encontrado');
        this.persona = [];
      }
    }
  }
  async eliminar()
  {
   if(!this.persona.rut)
     this.mensajeError('Falta el Rut');
   else{
     await this.crud.eliminar(this.persona.rut);
      this.mensajeExito('Ejecución realizada');
      this.persona = [];
   }
 }
 async limpiar()
 {
    this.persona = [];
 }
 listar()
 {
    this.router.navigateByUrl('/quintalistado');
 }
}
