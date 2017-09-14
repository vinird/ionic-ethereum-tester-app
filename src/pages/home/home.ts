import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LoadingController } from 'ionic-angular';

// import { BigNumber } from 'bignumber.js';
declare var web3; 
// declare var Web3; 



@Component({ 
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    // private host = "http://159.203.0.218:8545";
    private data : string;
    private loader : any;
    private accounts : string;

    constructor(public navCtrl: NavController, private iab: InAppBrowser, public loadingCtrl: LoadingController) 
    {
       this.data = "No data..";
       this.accounts = "No data..";
    }

    ionViewDidLoad()
    {
  	}

  	openEthWebClient()
  	{
  		this.iab.create('http://159.203.0.218/eth/ethereum_client/');
  	}


    charge_data() {
      this.loader = this.loadingCtrl.create({
        content: "Please wait...", 
      });
      this.loader.present().then(() => {
        this.data = "";
        this.data += "<strong>Estado: </strong> conectado <br/>" 
         // start web3 filters, calls, etc

        this.data += "<strong>Network: </strong> "+web3.version.network+" <br/>";
        this.data += "<strong>Ethereum version: </strong> "+web3.version.ethereum+" <br/>";
        this.data += "<strong>Is listenig: </strong> "+web3.net.listening+" <br/>";
        this.data += "<strong>Connectes peers: </strong> "+web3.net.peerCount+" <br/>";
        this.data += "<strong>Ethereum methods: </strong> (check console) F12 <br/>";
        this.data += "<strong>Ethereum default account: </strong> "+web3.eth.defaultAccount+" <br/>"
        this.data += "<strong>Ethereum default block: </strong> "+web3.eth.defaultBlock+" <br/>";
        this.data += "<strong>Ethereum sync: </strong> "+web3.eth.syncing+" <br/>";
        this.data += "<strong>Ethereum coinbase: </strong> "+web3.eth.coinbase+" <br/>";
        this.data += "<strong>Ethereum is mining: </strong> "+web3.eth.mining+" <br/>";
        this.data += "<strong>Ethereum gas price: </strong> "+web3.eth.gasPrice+" <br/>";
        this.loader.dismiss();
      })
   


      // console.log("Current block")
      // console.log(web3.eth.getBlock(web3.eth.blockNumber))

      // console.log("Ethereum methods")
      // console.log((web3.eth))
    }

    charge_account(){
      this.accounts = "";
      this.loader = this.loadingCtrl.create({
        content: "Please wait...", 
      });
      this.loader.present().then(() => {
        let account =  web3.eth.accounts;
        this.accounts += "<strong>Ethereum accounts: </strong>  <br/>";
        for(var i = 0; i<account.length;i++) { 
            this.accounts += " "+ account[i] + "<br/>"
        } 
        this.loader.dismiss();
      })
    }

    presentLoading(state) {
      if(state) {
        this.loader = this.loadingCtrl.create({
          content: "Please wait...", 
        });
        this.loader.present();
      } else {
        this.loader.dismiss();

      }
    }

}
