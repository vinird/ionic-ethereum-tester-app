import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, , private iab: InAppBrowser) {
  		const browser = this.iab.create('http://159.203.0.218/eth/ethereum_client/');
  }

}
