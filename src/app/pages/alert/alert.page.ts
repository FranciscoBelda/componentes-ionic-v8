import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonAlert, IonButton, IonContent} from '@ionic/angular/standalone';
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderComponent, IonButton, IonAlert]
})
export class AlertPage implements OnInit {
  titulo!: string;
  botonesAlert = [
    {
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
        console.log('Cancelar');
      }
    }, {
      text: 'Ok',
      handler: () => {
        console.log('Botón OK');
      }
    }
  ];
  inputs = [
    {
      name: 'nombre',
      type: 'text', // Tipo de input, como en HTML
      placeholder: 'Placeholder'

    }
  ];
  botonesInput = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        // Qué tenemos que hacer cuando pulsen el botón
        console.log('Confirmado Cancelar');
      }
    },
    {
      text: 'Ok',
      handler: (data: any) => {
        console.log('Confirmado Ok y datos', data);
        // Guardamos en nuestra variable de la clase título el nombre guardado en el input
        this.titulo = data.nombre;
      }
    }
  ];
  public radioButtons = [ {
    text: 'Cancelar',
    role: 'cancel',
    handler: () => {
      console.log('Confirmado Cancelar');
    }
  },
    {
      text: 'Ok',
      handler: (data: any) => {
        console.log('Confirmado Ok y color: ', data);
      }
    }];
  public radioInputs = [
    {
      label: 'Red',
      type: 'radio',
      value: 'red',
    },
    {
      label: 'Blue',
      type: 'radio',
      value: 'blue',
    },
    {
      label: 'Green',
      type: 'radio',
      value: 'green',
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
