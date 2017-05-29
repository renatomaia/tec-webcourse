(function () { 'use strict';

angular.module('NarrowItDownApp', [])
.service('MenuSearchService', MenuSearchService)
.controller('NarrowItDownController', NarrowItDownController)
.directive('foundItems', FoundItemsDirective);

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
	return {
		getMatchedMenuItems: function (searchItem) {
			searchItem = searchItem.toLowerCase();
			return $http({
				method: 'GET',
				url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
			}).then(function (result) {
				var foundItems = [];
				var menuItems = result.data.menu_items;
				for (var i=0; i<menuItems.length; ++i) {
					if (menuItems[i].description.toLowerCase().search(searchItem) !== -1) {
						foundItems.push(menuItems[i]);
					}
				}
				return foundItems;
			});
		},
	};
};

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(search) {
	var ctrl = this;
	ctrl.foundItems = [];
	ctrl.narrowItDown = function () {
		search.getMatchedMenuItems(ctrl.searchItem).then(function (foundItems) {
			ctrl.found = foundItems;
		}, function (error) {
			console.log(error);
		});
	};
	ctrl.removeItem = function (index) {
		ctrl.found.splice(index, 1);
	};
};

function FoundItemsDirective() {
	return {
		restrict: "E",
		templateUrl: 'templates/foundItems.html',
		scope: {
			foundItems: '<',
			onRemove: '&',
		},
	};
};

})();

