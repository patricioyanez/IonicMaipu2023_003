import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  private urlAPI = 'https://jsonplaceholder.typicode.com/';
  listado : any = [];
  posts : any = [];

  constructor(private http: HttpClient) { }

  getUsers()
  {
    const url = this.urlAPI + 'users';
    this.http.get(url).subscribe((data=[]) => {this.listado = data; });
    return this.listado;
  }
  getUsersPost(id:string)
  {
    this.posts = [];
    const url = this.urlAPI + 'users/' + id + '/posts';
    this.http.get(url).subscribe((data=[]) => { this.posts = data; });
  }

// mostrar todos los comentarios del post seleccionado
}
