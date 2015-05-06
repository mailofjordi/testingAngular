(function(){
	var gems = [
		{
			name: 'Azure', 
			price: 110.50,
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Pep', 
			price: 5.50,
			canPurchase: false,
			soldOut: true
		},
		{
			name: 'Ril', 
			price: 15.21,
			canPurchase: true,
			soldOut: false
		}
	];
	var app = angular.module('gemStore',[]);
	
	app.controller("StoreController", function(){
		this.products = gems;
	})
})();


