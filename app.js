(function(){
	var gem = { name: 'Azure', price: 2.95 };
	var app = angular.module('gemStore',[]);
	
	app.controller("StoreController", function(){
		this.product = gem;
	})
})();


