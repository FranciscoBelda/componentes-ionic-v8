import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent, IonFooter,
  IonHeader, IonIcon, IonLabel, IonPopover,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {PopoverController} from "@ionic/angular";
import {PopoverDataPage} from "../popover-data/popover-data.page";

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
  standalone: true,
  providers: [PopoverController],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonButton, IonIcon, IonPopover, IonLabel, IonFooter]
})
export class PopoverPage {
  public popoverController: PopoverController = inject(PopoverController);
  message = '';

  constructor() {}


  async presentPopover(e: Event) {
    const popover = await this.popoverController.create({
      component: PopoverDataPage,
      event: e,
    });

    await popover.present();

    const result = await popover.onDidDismiss();
    if(result.data) {
      this.message = `Popover dismissed with item: ${result.data.item}`;
    }
  }

}
