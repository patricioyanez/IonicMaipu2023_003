import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private storage : Storage) { this.storage.create(); }
  // C.R.U.D.
  async guardar(id: string, valor: any)
  { // clave/valor (id/valor)
    await this.storage.set(id, valor);
  }

  async leer(id: string)
  {
    await this.storage.get(id);
  }

  async eliminar(id: string)
  {
    await this.storage.remove(id);
  }
  async listar()
  {
    let listado:any = [];
    await this.storage.forEach((v,k) => { listado.push(v); });
    return listado;
  }
}
