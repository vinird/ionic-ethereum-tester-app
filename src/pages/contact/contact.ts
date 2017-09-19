import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

// Custom providers
import { UserContractProvider } from '../../providers/user-contract/user-contract';

import { KevinContractProvider } from '../../providers/kevin-contract/kevin-contract'

declare var App;

@Component({
	selector: 'page-contact',
	templateUrl: 'contact.html'
})
export class ContactPage {

	public userGas: any;
	public user: any;
	public blockNumber: any;
	private loader : any;
	private word: any;
	private inputWord: string;
	private address: any;

	public userContract: any;

	constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public UserContract: UserContractProvider, public KevinContract: KevinContractProvider) {
		this.userContract = App.getUserContract();
	}

	///////////////////////////////////////////////////
	getWord() {
		// Create loader
		this.createLoader();
		console.log(App.web3Provider);
		// Present the loader
		this.loader.present().then(() => {
			this.KevinContract.getWord().then((res) => {
				console.log("getWord");
				this.word = res;
				this.loader.dismiss();
			}).catch((err) => {
				this.presentToast(err, 3000);
				this.loader.dismiss();
			});
		});
	}

	///////////////////////////////////////////////////
	getAddress() {
		// Create loader
		this.createLoader();
		console.log(App.web3Provider);
		// Present the loader
		this.loader.present().then(() => {
			this.KevinContract.getAddress().then((res) => {
				console.log("getWord");
				this.address = JSON.stringify(res);
				this.loader.dismiss();
			}).catch((err) => {
				this.presentToast(err, 3000);
				this.loader.dismiss();
			});
		});
	}

	///////////////////////////////////////////////////
	setWord() {
		// Create loader
		this.createLoader();
		// Present the loader
		this.loader.present().then(() => {
			this.KevinContract.setWord(this.inputWord).then((res) => {
				this.presentToast(res, 3000);
				this.loader.dismiss();
			}).catch((err) => {
				this.presentToast(err, 3000);
				this.loader.dismiss();
			});
		});
	}

	///////////////////////////////////////////////////
	public getUserGas() {
		// Create loader
		this.createLoader();
		// Present the loader
		this.loader.present().then(() => {
			// Wait for the response of the blockchain
			this.UserContract.getUserGas().then((res) => {
				this.userGas = "User available gas: " + res; // Show the result
				this.loader.dismiss();
			}).catch((err) => {
				this.presentToast(err, 3000);	
				this.loader.dismiss();
			});	
		});
	}

	///////////////////////////////////////////////////
	public getUser() {  	
		// Create loader
		this.createLoader();
		// Present the loader
		this.loader.present().then(() => {
			// Wait for the response of the blockchain
			this.UserContract.getUser().then((res) => {
				this.user = "User account: " + res; // Show the result
				this.loader.dismiss();
			}).catch((err) => {
				this.presentToast(err, 3000);	
				this.loader.dismiss();
			});	
		});
	}

	///////////////////////////////////////////////////
	public getBlockNumber() {
		// Create loader
		this.createLoader();
		// Present the loader
		this.loader.present().then(() => {
			// Wait for the response of the blockchain
			this.UserContract.getBlockNumber().then((res) => {
				this.blockNumber = "Contract block number: " + res; // Show the result
				this.loader.dismiss();
			}).catch((err) => {
				this.presentToast(err, 3000);	
				this.loader.dismiss();
			});	
		});
	}

	//////////////////////////////////////////////////
	private presentToast(text, duration) {
		let toast = this.toastCtrl.create({
			message: text,
			duration: duration
		});
		toast.present();
	}

	/////////////////////////////////////////////////
	private createLoader() {
		this.loader = this.loadingCtrl.create({
			content: "Please wait...", 
		});
	}
}
