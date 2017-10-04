var Web3 = require('web3');
var web3 = new Web3();

var host = "http://159.203.0.218:8545";

App = {
	web3Provider: null,
	contracts: {},

	init: function() {
		return App.initWeb3();
	},

	// Init Web3 provider ////////////////////////////////////////////
	initWeb3: function() {
		// Inicializa web3 y apunta el proveedor hacia testRPC.
		// escoja el proveedor específico de Web3.providers
		App.web3Provider = new Web3.providers.HttpProvider(host);
		web3 = new Web3(App.web3Provider);
		// console.log("Web3 new instance " + web3)
		// console.log(web3)
		try {
			console.log("Blockchain is listening: " + web3.net.listening);
		} catch (err) {
			console.log("Error " + err)
		}
		return App.initContract();
	},

	// Init contract ////////////////////////////////////////////////
	initContract: function() {
		$.getJSON('./assets/contracts-artifacts/User.json', function(data) {
			// Get the necessary contract artifact file and instantiate it with truffle-contract.
			var UserArtifact = data;
			App.contracts.User = TruffleContract(UserArtifact);

			// Set the provider for our contract.
			App.contracts.User.setProvider(App.web3Provider);
		});

		$.getJSON('./assets/contracts-artifacts/TextContract.json', function(data) {
			// Get the necessary contract artifact file and instantiate it with truffle-contract.
			var KevinArtifact = data;
			App.contracts.Kevin = TruffleContract(KevinArtifact);

			// Set the provider for our contract.
			App.contracts.Kevin.setProvider(App.web3Provider);
			App.contracts.Kevin.defaults({
			  from: "0x584a104e03db1199be9d11c579d56c73bc0267af"
			});
			// console.log(App.contracts.Kevin.defaults)
		});
	},

	// Get contracts //////////////////////////////////////////
	getUserContract: function() {
		return App.contracts.User;
	},
	getKevinContract: function() {
		return App.contracts.Kevin;
	}
}

window.onload = function() {
	// App.init();
};