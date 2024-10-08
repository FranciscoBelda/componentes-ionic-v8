import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem, IonLabel,
  IonList,
  IonListHeader, IonMenuButton,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';


import {DataService} from "../../services/data.service";
import {Componente} from "../../common/interfaces";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonListHeader, IonItem, IonIcon, IonLabel, RouterLink, IonButtons, IonMenuButton]
})
export class InicioPage implements OnInit {
  private dataService: DataService = inject(DataService);
  componentes: Componente[] = [];

  constructor() {
  }

  ngOnInit() {
    this.cargarComponentes();
  }

  private cargarComponentes() {
    this.dataService.getComponentesMenu().subscribe(
      {
        next:   (data: Componente[]) => {
          this.componentes = data;
        },
        error:   (err: Error) => console.error(err),
        complete:   () => {
          console.log('Data loaded.')}
      }

    );
  }


}
