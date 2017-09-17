import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

declare var App;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public userGas: any;
  public user: any;
  public blockNumber: any;
  public userContract: any;
  private loader : any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    this.userContract = App.getUserContract();
  }

  ///////////////////////////////////////////////////
  getUserGas() {
  	// Truffle-contract using User artifact
    let x = this.userContract.deployed().then(function(instance) {

    	let userInstance = instance;
    	return userInstance.getUserGas.call(); // Make the call

    }).then(function(response) {
    	return response; // Result
    }).catch(function(err) {
    	console.log(err.message) // Error
    });
  	
  	// Create loader
  	this.loader = this.loadingCtrl.create({
      content: "Please wait...", 
    });

  	// Present the loader
    this.loader.present().then(() => {
    	// Wait for the response of the blockchain
		  x.then((res) => {
		  	this.userGas = "User available gas: " + res; // Show the result
		  	this.loader.dismiss();
		  }).catch((err) => {
		  	this.presentToast(err, 3000);	
		  	this.loader.dismiss();
		  });	
    });
  }

  ///////////////////////////////////////////////////
  getUser() {
  	// Truffle-contract using User artifact
    let x = this.userContract.deployed().then(function(instance) {

    	let userInstance = instance;
    	return userInstance.getUser.call(); // Make the call

    }).then(function(response) {
    	return response; // Result
    }).catch(function(err) {
    	console.log(err.message) // Error
    });
  	
  	// Create loader
  	this.loader = this.loadingCtrl.create({
      content: "Please wait...", 
    });

  	// Present the loader
    this.loader.present().then(() => {
    	// Wait for the response of the blockchain
		  x.then((res) => {
		  	this.user = "User account: " + res; // Show the result
		  	this.loader.dismiss();
		  }).catch((err) => {
		  	this.presentToast(err, 3000);	
		  	this.loader.dismiss();
		  });	
    });
  }

  ///////////////////////////////////////////////////
  getBlockNumber() {
  	// Truffle-contract using User artifact
    let x = this.userContract.deployed().then(function(instance) {

    	let userInstance = instance;
    	return userInstance.getBlockNumber.call(); // Make the call

    }).then(function(response) {
    	return response; // Result
    }).catch(function(err) {
    	console.log(err.message) // Error
    });
  	
  	// Create loader
  	this.loader = this.loadingCtrl.create({
      content: "Please wait...", 
    });

  	// Present the loader
    this.loader.present().then(() => {
    	// Wait for the response of the blockchain
		  x.then((res) => {
		  	this.blockNumber = "Contract block number: " + res; // Show the result
		  	this.loader.dismiss();
		  }).catch((err) => {
		  	this.presentToast(err, 3000);	
		  	this.loader.dismiss();
		  });	
    });
  }

	//////////////////////////////////////////////////
  presentToast(text, duration) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: duration
    });
    toast.present();
  }


}
