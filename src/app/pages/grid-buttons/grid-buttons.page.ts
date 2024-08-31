import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader, IonIcon, IonImg,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {HeaderComponent} from "../../components/header/header.component";
import {RouterLink} from "@angular/router";
import {addIcons} from "ionicons";
import {heart} from "ionicons/icons";

@Component({
  selector: 'app-grid-buttons',
  templateUrl: './grid-buttons.page.html',
  styleUrls: ['./grid-buttons.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonGrid, IonRow, IonCol, IonButton, RouterLink, IonButtons, IonBackButton, IonIcon, IonCard, IonImg, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent]
})
export class GridButtonsPage implements OnInit {

  constructor() {
    addIcons({heart})
  }

  ngOnInit() {
  }

}
