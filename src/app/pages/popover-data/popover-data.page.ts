import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {PopoverController} from "@ionic/angular";

@Component({
  selector: 'app-popover-data',
  templateUrl: './popover-data.page.html',
  styleUrls: ['./popover-data.page.scss'],
  standalone: true,
  providers: [PopoverController],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonLabel]
})
export class PopoverDataPage  {
  public popoverCtrl: PopoverController = inject(PopoverController);
  items = Array(40);
  constructor() { }

  onClick( valor: number) {
    this.popoverCtrl.dismiss({
      item: valor
    });
  }

}
