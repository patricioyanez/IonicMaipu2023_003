import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  private urlAPI = 'https://jsonplaceholder.typicode.com/';
  listado : any = [];

  constructor(private http: HttpClient) { }

  getUsers()
  {
    const url = this.urlAPI + 'users';
    this.http.get(url).subscribe((data=[]) => {
      this.listado = data;
    });
  }
  getUsersPost(id:string)
  {
    const url = this.urlAPI + 'users/' + id + '/posts';
    return this.http.get(url).subscribe((data=[]) => {
      this.listado = data;
    });
  }

// mostrar todos los comentarios del post seleccionado
}
