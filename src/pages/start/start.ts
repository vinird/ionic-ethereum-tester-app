import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {
  public hostUrl: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public toastCtrl: ToastController, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
    this.showAlert()
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Wait!',
      subTitle: 'You must add a host url before you continue',
      buttons: ['OK']
    });
    alert.present();
  }
  
  saveInputValue(value){
    localStorage.setItem('inputValue',value);
  }

  saveHostUrl(hostUrl: string) {
    localStorage.setItem('host-url', hostUrl);
    this.storage.set('host-url', hostUrl).then((val) => {
      const toast = this.toastCtrl.create({
        message: `Host Url: ${hostUrl} saved successfully`,
        duration: 4000,
        position: 'bottom'
      });
      toast.present();
    }).catch((error) => {
      const toast = this.toastCtrl.create({
        message: `Host Url could be saved successfully`,
        duration: 4000,
        position: 'bottom'
      });
      toast.present();
    });
  }

}
