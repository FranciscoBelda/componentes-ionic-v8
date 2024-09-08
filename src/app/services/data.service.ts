import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiMoviesResult, Componente, Usuario} from "../common/interfaces";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http: HttpClient = inject(HttpClient);

  getComponentesMenu(): Observable<Componente[]> {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('https://jsonplaceholder.typicode.com/users')
  }
  loadMovies(page: number): Observable<ApiMoviesResult> {
    return this.http.get<ApiMoviesResult>(
      `${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}&page=${page}`);
  }
  getAlbumes() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

}

