import {Component, model, ModelSignal, OnInit} from '@angular/core';
import {
  IonBackButton,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonMenuToggle, IonButton, IonAvatar, IonImg
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonMenuButton, IonMenuToggle, IonButton, IonAvatar, IonImg]
})
export class HeaderComponent  implements OnInit {
  titulo: ModelSignal<string> = model.required();
  constructor() { }

  ngOnInit() {}

}
