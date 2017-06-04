(function () { 'use strict';

angular.module('MenuApp').component('menuappCategories', {
	templateUrl: 'ng/menuapp/html-tag/categories/template.html',
	bindings: {
		categories: '<list',
	},
});

})();
