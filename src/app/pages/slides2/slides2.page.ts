import {Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonAvatar, IonContent, IonHeader, IonImg, IonLabel, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {HeaderComponent} from "../../components/header/header.component";
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-slides2',
  templateUrl: './slides2.page.html',
  styleUrls: ['./slides2.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonAvatar, IonImg, IonLabel],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Slides2Page implements OnInit {
  private toastService = inject(ToastService);
  constructor() { }

  ngOnInit() {
  }

  swiperClick(event: MouseEvent, a: string) {
    this.toastService.cargarToast(a,1500,'success');
  }
}
