(function () { 'use strict';

angular.module('NarrowItDownApp', [])
.service('MenuSearchService', MenuSearchService)
.controller('NarrowItDownController', NarrowItDownController)
.directive('foundItems', FoundItemsDirective)
.constant('menuItemsUrl', 'https://davids-restaurant.herokuapp.com/menu_items.json');

MenuSearchService.$inject = ['$http', 'menuItemsUrl'];
function MenuSearchService($http, url) {
	return {
		getMatchedMenuItems: function (searchItem) {
			searchItem = searchItem.toLowerCase();
			return $http({
				url: url,
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
	ctrl.narrowItDown = function () {
		if (ctrl.searchItem === undefined || ctrl.searchItem == "") {
			ctrl.found = [];
		} else {
			search.getMatchedMenuItems(ctrl.searchItem).then(function (foundItems) {
				ctrl.found = foundItems;
			}, function (error) {
				console.log(error);
			});
		}
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

