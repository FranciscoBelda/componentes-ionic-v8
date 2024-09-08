import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList, IonListHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonList, IonItem, IonLabel, IonCheckbox, IonListHeader]
})
export class CheckboxPage {

  data = [
    {
      name: 'primary',
      selected: false
    }, {
      name: 'secondary',
      selected: true
    }, {
      name: 'tertiary',
      selected: false
    },
    {
      name: 'success',
      selected: true
    }
  ];
  constructor() { }

  onClick( check: any ) {
    console.log( check );
  }

}
