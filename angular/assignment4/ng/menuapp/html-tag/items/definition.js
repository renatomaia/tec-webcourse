(function () { 'use strict';

angular.module('MenuApp').component('menuappItems', {
	templateUrl: 'ng/menuapp/html-tag/items/template.html',
	bindings: {
		items: '<list',
	},
});

})();
