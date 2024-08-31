import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonBackButton,
  IonButtons, IonChip,
  IonContent,
  IonHeader, IonImg, IonItem, IonLabel, IonList, IonListHeader, IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderComponent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonAvatar, IonImg, IonChip, IonLabel, IonList, IonListHeader, IonItem, IonThumbnail]
})
export class AvatarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
