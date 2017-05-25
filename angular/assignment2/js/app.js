(function () { 'use strict';

angular.module('ShoppingListCheckOff', [])
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController);

function ShoppingListCheckOffService() {
	return {
		tobuy: [
			{ name: "cookies", quantity: 10 },
			{ name: "tomatoes", quantity: 9 },
			{ name: "onions", quantity: 8 },
			{ name: "carrots", quantity: 7 },
			{ name: "potatoes", quantity: 6 },
		],
		bought: [],
	};
};

ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function ToBuyController($scope, lists) {
	$scope.list = lists.tobuy;
	$scope.mark = function (i) {
		lists.bought.push(lists.tobuy.splice(i, 1)[0]);
	};
};

AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function AlreadyBoughtController($scope, lists) {
	$scope.list = lists.bought;
};

})();

