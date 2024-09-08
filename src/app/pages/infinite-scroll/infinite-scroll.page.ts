import {Component, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonInfiniteScroll, IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonList, IonItem, IonLabel, IonInfiniteScroll, IonInfiniteScrollContent]
})
export class InfiniteScrollPage {

  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll!: IonInfiniteScroll;
  data: any[] = Array(20);
  constructor() { }

  loadData(event: any) {
    console.log('Cargando siguientes ...');
    setTimeout(() =>{
      if (this.data.length > 50) {
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }
      const nuevoArr = Array(20);
      this.data.push( ...nuevoArr);
      event.target.complete();
    }, 1000 );
  }

}
