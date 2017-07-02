(function () { 'use strict';

angular.module('TecKHow').config(ViewStateConfig);

ViewStateConfig.$inject = ['$stateProvider'];
function ViewStateConfig($stateProvider) {
	$stateProvider
		.state('theme-view', {
			url: '/theme-view',
			templateUrl: 'ng/teckhow/ui/theme-view/template.html',
		})
	;
}

})();
