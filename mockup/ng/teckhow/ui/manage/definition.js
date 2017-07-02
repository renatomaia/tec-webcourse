(function () { 'use strict';

angular.module('TecKHow').config(ViewStateConfig);

ViewStateConfig.$inject = ['$stateProvider'];
function ViewStateConfig($stateProvider) {
	$stateProvider
		.state('manage', {
			url: '/manage',
			templateUrl: 'ng/teckhow/ui/manage/template/main.html',
		})
		.state('manage.themes', {
			url: '/themes',
			templateUrl: 'ng/teckhow/ui/manage/template/themes.html',
		})
		.state('manage.projects', {
			url: '/projects',
			templateUrl: 'ng/teckhow/ui/manage/template/projects.html',
		})
	;
}

})();
