import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

// Declarations
declare var App;

/*
  Generated class for the UserContractProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserContractProvider {

	public userContract: any;

	constructor() {
		console.log('Hello UserContractProvider Provider');
		this.userContract = App.getUserContract();
	}

	// Get user gas //////////////////////////////////////////////////
	getUserGas() {
		// return promise
		return this.userContract.deployed().then(function(instance) {
			let userInstance = instance;
			return userInstance.getUserGas.call(); // Make the call
		}).then(function(response) {
			return response; // Result
		}).catch(function(err) {
			console.log(err.message) // Error
			throw new TypeError(err);
		});
	}

	// Get current user account /////////////////////////////////////
	getUser() {
		// return promise
		return this.userContract.deployed().then(function(instance) {
			let userInstance = instance;
			return userInstance.getUser.call(); // Make the call
		}).then(function(response) {
			return response; // Result
		}).catch(function(err) {
			console.log(err.message) // Error
			throw new TypeError(err);
		});
	}

	// Get contract number block ///////////////////////////////////
	getBlockNumber() {
		// return promise
		return this.userContract.deployed().then(function(instance) {
			let userInstance = instance;
			return userInstance.getBlockNumber.call(); // Make the call
		}).then(function(response) {
			return response; // Result
		}).catch(function(err) {
			console.log(err.message) // Error
			throw new TypeError(err);
		});
	}
}
