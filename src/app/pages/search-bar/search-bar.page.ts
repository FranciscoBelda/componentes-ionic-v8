import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader, IonItem, IonList,
  IonSearchbar,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {DataService} from "../../services/data.service";
import {FiltroPipe} from "../../pipes/filtro.pipe";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSearchbar, IonButtons, IonBackButton, IonList, IonItem, FiltroPipe]
})
export class SearchBarPage implements OnInit {
  private dataService: DataService = inject(DataService);
  textoBuscar = '';
  albumes: any[] = [];

  constructor() {
  }

  ngOnInit() {
    this.dataService.getAlbumes()
      .subscribe({
        next: (albumes: any[]) => {
          this.albumes = albumes;
        },
        error: err => {
          console.error(err);
        },
        complete: () => {
          console.log('Albumes cargados');
        }
      });
  }

  buscar(event: any) {
    this.textoBuscar = event.detail.value;
  }

}
