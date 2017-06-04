(function () {'use strict';

angular.module('MenuData', []).service('MenuDataService', MenuDataService);

var RESTURL = 'https://davids-restaurant.herokuapp.com/';
var CategoriesURL = RESTURL+'categories.json';
var CategoryItemsURL = RESTURL+'menu_items.json';

MenuDataService.$inject = ['$http']
function MenuDataService($http) {
	return {
		getAllCategories: function () {
			return $http({
				url: CategoriesURL,
			}).then(function (response) {
				return response.data;
			});
		},
		getCategoryItems: function (categoryShortName) {
			return $http({
				url: CategoryItemsURL,
				params: { category: categoryShortName }, 
			}).then(function (response) {
				return response.data.menu_items;
			});
		},
	};
}

})();
