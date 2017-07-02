(function () { 'use strict';

angular.module('TecKHow').config(ViewStateConfig);

ViewStateConfig.$inject = ['$stateProvider'];
function ViewStateConfig($stateProvider) {
	$stateProvider
		.state('found-view', {
			url: '/found-view',
			templateUrl: 'ng/teckhow/ui/found-view/template.html',
		})
	;
}

})();
