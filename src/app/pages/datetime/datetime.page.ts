import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButtons,
  IonContent, IonDatetime,
  IonHeader, IonItem,
  IonLabel, IonModal,
  IonSegment,
  IonSegmentButton, IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {format, parseISO} from "date-fns";

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSegment, IonSegmentButton, IonLabel, IonItem, IonText, IonModal, IonDatetime, IonButtons, IonBackButton]
})
export class DatetimePage {
  modes = ['date', 'date-time', 'month', 'month-year', 'time', 'time-date', 'year'];
  selectedMode = 'date';
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T11:00:00.000Z';
  formattedString = '';
  highlightedDates = (isoString: any) => {
    const date = new Date(isoString);
    const utcDay = date.getUTCDate();

    // Coloreamos los días múltiplos de 5 de rosa con texto morado
    if (utcDay % 5 === 0) {
      return {
        textColor: '#800080',
        backgroundColor: '#ffc0cb',
      };
    }

    // Coloreamos los días múltiplos de 3 de secondary con texto secondary contrast
    if (utcDay % 3 === 0) {
      return {
        textColor: 'var(--ion-color-secondary-contrast)',
        backgroundColor: 'var(--ion-color-secondary)',
      };
    }

    return undefined;
  };
  constructor() {
    this.setToday();
  }

  setToday() {
    this.formattedString = (format(parseISO(
        format(new Date(),
          'yyyy-MM-dd') + 'T11:00:00.000Z'),
      'HH:mm, MMM d, yyyy'));
  }

  dateChanged(value: any) {
    this.dateValue = value;
    this.formattedString = format(parseISO(value), 'HH:mm, MMM d, yyyy');
  }

}
