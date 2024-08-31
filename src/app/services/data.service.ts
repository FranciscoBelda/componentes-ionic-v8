import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Componente} from "../common/interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http: HttpClient = inject(HttpClient);

  getComponentesMenu(): Observable<Componente[]> {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

}
