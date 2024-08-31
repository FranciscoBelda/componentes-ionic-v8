import {inject, Injectable} from '@angular/core';
import {ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastCtrl = inject(ToastController);
  constructor() { }
  async cargarToast(message: string,duration: number,color: string){
    const toast = await this.toastCtrl.create({
      message,
      duration,
      color,
      position: 'middle'
    });
    await toast.present();
  }

}
