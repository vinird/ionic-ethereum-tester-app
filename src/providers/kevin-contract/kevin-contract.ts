import { Injectable } from '@angular/core';

declare var App;

/*
  Generated class for the KevinContractProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class KevinContractProvider {

  public kevinContract: any;

  constructor() {
    console.log('Hello KevinContractProvider Provider');
    this.kevinContract = App.getKevinContract();
  }

  ////////////////////////////////////////////////////////////////
  getWord() {
  	return this.kevinContract.deployed().then(function(instance){
  		let kevinInstance = instance;
		return kevinInstance.getWord.call(); // Make the call
  	}).then(function(response){
  		return response;
  	}).catch(function(err){
  		console.log(err.message); // Error
		throw new TypeError(err);
  	});
  }

  ////////////////////////////////////////////////////////////////
  setWord(text) {
  	return this.kevinContract.deployed().then((instance) => {
  		let kevinInstance = instance;
  		return kevinInstance.setWord(text);
  	}).then((response) => {
  		return response;
  	}).catch((err) => {
  		console.log(err.message); // Error
		throw new TypeError(err);
  	});
  }

  ////////////////////////////////////////////////////////////////
  getAddress() {
  	return this.kevinContract.deployed().then((instance) => {
  		let kevinInstance = instance;
  		return kevinInstance.getAddress.call();
  	}).then((response) => {
  		return response;
  	}).catch((err) => {
  		console.log(err.message); // Error
		throw new TypeError(err);
  	});
  }

}
