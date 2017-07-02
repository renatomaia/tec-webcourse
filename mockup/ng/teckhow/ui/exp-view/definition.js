(function () { 'use strict';

angular.module('TecKHow').config(ViewStateConfig);

ViewStateConfig.$inject = ['$stateProvider'];
function ViewStateConfig($stateProvider) {
	$stateProvider
		.state('exp-view', {
			url: '/exp-view',
			templateUrl: 'ng/teckhow/ui/exp-view/template.html',
		})
	;
}

})();
