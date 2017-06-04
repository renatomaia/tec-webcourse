(function () { 'use strict';

angular.module('MenuApp')
	.config(ViewStateConfig)
	.controller('MenuAppCategoryListViewCtrl', ListViewCtrl)
	.controller('MenuAppCategoryItemsViewCtrl', ItemsViewCtrl)
;

ViewStateConfig.$inject = ['$stateProvider'];
function ViewStateConfig($stateProvider) {
	$stateProvider
		.state('categories', {
			url: '/categories',
			templateUrl: 'ng/menuapp/ui-state/categories/template/list.html',
			controller: 'MenuAppCategoryListViewCtrl as catsView',
			resolve: {
				categories: [ 'MenuDataService',
					function (MenuDataService) {
						return MenuDataService.getAllCategories();
					},
				],
			},
		})
		.state('categories.items', {
			url: '/{category}/items',
			templateUrl: 'ng/menuapp/ui-state/categories/template/items.html',
			controller: 'MenuAppCategoryItemsViewCtrl as itemsView',
			resolve: {
				categoryItems: [ '$stateParams', 'MenuDataService',
					function ($stateParams, MenuDataService) {
						return MenuDataService.getCategoryItems($stateParams.category)
					},
				],
			},
		})
	;
}

ListViewCtrl.$inject = ['categories'];
function ListViewCtrl(categories) {
	this.list = categories;
};

ItemsViewCtrl.$inject = ['categoryItems'];
function ItemsViewCtrl(categoryItems) {
	this.list = categoryItems;
};

})();
