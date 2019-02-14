import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ControllersService {


  constructor(private alertController: AlertController, private loaderCtrl: LoadingController) { }

  /**
   * @description : call for common alert call
   */
  async callForAlert(headerName, messageContent) {
    const alert = await this.alertController.create({
      header: headerName,
      // subHeader: 'Oops',
      message: messageContent,
      buttons: ['OK']
    });
    return await alert.present();
  }

  /**
  * @description for loading purpose
  */
  async  presentLoading() {
    const loadingElement = await this.loaderCtrl.create({
      message: 'Please wait...',
      spinner: 'crescent',
      duration: 1000
    });
    return await loadingElement.present();
  }
}
