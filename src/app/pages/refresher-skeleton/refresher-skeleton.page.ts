import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader, IonItem, IonList,
  IonRefresher,
  IonRefresherContent, IonSkeletonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-refresher-skeleton',
  templateUrl: './refresher-skeleton.page.html',
  styleUrls: ['./refresher-skeleton.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonRefresher, IonRefresherContent, IonList, IonItem, IonSkeletonText]
})
export class RefresherSkeletonPage {
  items: any[] = [];
  skeleton = false;
  constructor() { }

  doRefresh(event: any) {
    setTimeout(() => {
      this.items.push(...Array(10));
      this.skeleton = true;
      event.target.complete();
    }, 1500);
    this.skeleton = false;
  }

}
