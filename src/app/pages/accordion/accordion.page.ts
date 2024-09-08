import {Component, ElementRef, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAccordion,
  IonAccordionGroup, IonCol,
  IonContent, IonGrid,
  IonHeader,
  IonItem, IonLabel, IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.page.html',
  styleUrls: ['./accordion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonGrid, IonRow, IonCol]
})
export class AccordionPage {
  /* Buscamos en el html el elemento identificado con #listenerOut para poder usarlo aquí con la variable listenerOut */
  @ViewChild('listenerOut', { static: true }) listenerOut!: ElementRef;
  values: string[] = ['first', 'second', 'third'];
  option!: string;

  constructor() { }

  accordionGroupChange = (ev: any) => {
    const nativeEl = this.listenerOut.nativeElement;
    /* Comprobamos que al iniciar el componente el elemento #listenerOut sea vacío */
    if (!nativeEl) {
      return;
    }

    /* Buscamos el elemento seleccionado
    y lo sacamos de la lista de elementos colapsados y los guardamos en una constante */
    const collapsedItems = this.values.filter((value) => value !== ev.detail.value);
    /* Guardamos el elemento seleccionado en una constante */
    const selectedValue = ev.detail.value;

    /* Mostramos el resultado de elementos colapsados y expandidos */
    nativeEl.innerText = `
     Expanded: ${selectedValue === undefined ? 'None' : ev.detail.value}
     Collapsed: ${collapsedItems.join(', ')}
   `;
  };


  optionAccordion(ev: any) {
    this.option = ev.detail.value;
  }

}
