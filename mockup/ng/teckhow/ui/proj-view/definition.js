(function () { 'use strict';

angular.module('TecKHow').config(ViewStateConfig);

ViewStateConfig.$inject = ['$stateProvider'];
function ViewStateConfig($stateProvider) {
	$stateProvider
		.state('proj-view', {
			url: '/proj-view',
			templateUrl: 'ng/teckhow/ui/proj-view/template.html',
		})
	;
}

})();
