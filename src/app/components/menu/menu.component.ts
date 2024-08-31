import {Component, inject, OnInit} from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonIcon, IonItem, IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";
import {DataService} from "../../services/data.service";
import {Componente} from "../../common/interfaces";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonList, IonMenu, IonMenuToggle, IonHeader, IonTitle, IonToolbar, IonContent, IonIcon, IonLabel, IonItem, RouterLink]
})
export class MenuComponent  implements OnInit {
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
