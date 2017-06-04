(function () { 'use strict';

angular.module('MenuApp').config(ViewStateConfig);

ViewStateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function ViewStateConfig($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'ng/menuapp/ui-state/home/template.html'
	});
}

})();
