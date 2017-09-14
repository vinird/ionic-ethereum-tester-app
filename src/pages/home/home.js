var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LoadingController } from 'ionic-angular';
// declare var Web3; 
var HomePage = (function () {
    function HomePage(navCtrl, iab, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.loadingCtrl = loadingCtrl;
        this.data = "No data..";
        this.accounts = "No data..";
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.openEthWebClient = function () {
        this.iab.create('http://159.203.0.218/eth/ethereum_client/');
    };
    HomePage.prototype.charge_data = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        this.loader.present().then(function () {
            _this.data = "";
            _this.data += "<strong>Estado: </strong> conectado <br/>";
            // start web3 filters, calls, etc
            _this.data += "<strong>Network: </strong> " + web3.version.network + " <br/>";
            _this.data += "<strong>Ethereum version: </strong> " + web3.version.ethereum + " <br/>";
            _this.data += "<strong>Is listenig: </strong> " + web3.net.listening + " <br/>";
            _this.data += "<strong>Connectes peers: </strong> " + web3.net.peerCount + " <br/>";
            _this.data += "<strong>Ethereum methods: </strong> (check console) F12 <br/>";
            _this.data += "<strong>Ethereum default account: </strong> " + web3.eth.defaultAccount + " <br/>";
            _this.data += "<strong>Ethereum default block: </strong> " + web3.eth.defaultBlock + " <br/>";
            _this.data += "<strong>Ethereum sync: </strong> " + web3.eth.syncing + " <br/>";
            _this.data += "<strong>Ethereum coinbase: </strong> " + web3.eth.coinbase + " <br/>";
            _this.data += "<strong>Ethereum is mining: </strong> " + web3.eth.mining + " <br/>";
            _this.data += "<strong>Ethereum gas price: </strong> " + web3.eth.gasPrice + " <br/>";
            _this.loader.dismiss();
        });
        // console.log("Current block")
        // console.log(web3.eth.getBlock(web3.eth.blockNumber))
        // console.log("Ethereum methods")
        // console.log((web3.eth))
    };
    HomePage.prototype.charge_account = function () {
        var _this = this;
        this.accounts = "";
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        this.loader.present().then(function () {
            var account = web3.eth.accounts;
            _this.accounts += "<strong>Ethereum accounts: </strong>  <br/>";
            for (var i = 0; i < account.length; i++) {
                _this.accounts += " " + account[i] + "<br/>";
            }
            _this.loader.dismiss();
        });
    };
    HomePage.prototype.presentLoading = function (state) {
        if (state) {
            this.loader = this.loadingCtrl.create({
                content: "Please wait...",
            });
            this.loader.present();
        }
        else {
            this.loader.dismiss();
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController, InAppBrowser, LoadingController])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map