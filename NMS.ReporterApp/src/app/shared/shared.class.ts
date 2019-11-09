import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class SharedClass {
  constructor(
    public toastController: ToastController,
    public loadingController: LoadingController
  ) { }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  async  presentLoading(message) {
    const loader = await this.loadingController.create({
      message: message,
    });
    return loader;
  }

}