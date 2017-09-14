import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

declare var web3; 

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

	private balance : string;
	public balance_input : any;
	private loader : any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) 
  {
  	this.balance = "";
  }

  get_balance()
  {
  	this.loader = this.loadingCtrl.create({
        content: "Please wait...", 
      });
  	this.loader.present().then(() => {
	  	try{
	  		this .balance = "Eth: " + web3.eth.getBalance(this.balance_input)	
	  	} catch(err) {
	  		this .balance = "Invalid account"
	  	}
	  	this.loader.dismiss();
	});
  }

}
