import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController) {
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

  saveHostUrl(hostUrl: string) {
    localStorage.setItem('host-url', hostUrl);
    const toast = this.toastCtrl.create({
      message: `Host Url: ${hostUrl} saved successfully`,
      duration: 4000,
      position: 'bottom'
    });
    toast.present();
  }

}
