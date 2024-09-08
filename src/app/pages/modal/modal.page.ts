import {Component, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton, IonButtons,
  IonContent,
  IonHeader, IonInput, IonItem,
  IonItemDivider, IonLabel, IonList, IonListHeader,
  IonModal,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonButton, IonItemDivider, IonModal, IonButtons, IonList, IonListHeader, IonLabel, IonItem, IonInput]
})
export class ModalPage {

  /* VARIABLES */
  @ViewChild(IonModal) modal!: IonModal;
  usuario: {nombre: string; email: string; ciudad: string} =
    {
      nombre: '',
      email: '',
      ciudad: ''
    };
  message = 'Abra el modal y rellene los datos';
  /* FIN DE LAS VARIABLES */

  constructor() { }



  /* FUNCIONES */
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  onSubmitTemplate() {
    console.log('submit');
    this.modal.dismiss(this.usuario.nombre, 'confirm');
  }
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent;
    if (ev.detail.role === 'confirm') {
      this.message = `Hola, ${ev.detail.data}!`;
    }
  }

}
