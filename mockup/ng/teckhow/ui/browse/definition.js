(function () { 'use strict';

angular.module('TecKHow').config(ViewStateConfig);

ViewStateConfig.$inject = ['$stateProvider'];
function ViewStateConfig($stateProvider) {
	$stateProvider
		.state('browse', {
			url: '/browse',
			templateUrl: 'ng/teckhow/ui/browse/template/main.html',
		})
		.state('browse.search', {
			url: '/search',
			templateUrl: 'ng/teckhow/ui/browse/template/search.html',
			controller: MockCtrl,
		})
		.state('browse.people', {
			url: '/people',
			templateUrl: 'ng/teckhow/ui/browse/template/people.html',
			controller: MockCtrl,
		})
		.state('browse.themes', {
			url: '/themes',
			templateUrl: 'ng/teckhow/ui/browse/template/themes.html',
		})
		.state('browse.projects', {
			url: '/projects',
			templateUrl: 'ng/teckhow/ui/browse/template/projects.html',
		})
	;
}

function MockCtrl($scope) {
	$scope.foundPeople = [
		{
			name: "Fulana da Silva",
			themes: ["AngularJS2", "ReactJS"],
			experiences: 5,
			projects: 3,
		},
		{
			name: "Beltrano da Silva",
			themes: ["AngularJS", "Bootstrap"],
			experiences: 1,
			projects: 1,
		},
		{
			name: "Fulano Souza",
			themes: ["ReactJS", "BackboneJS", "JQuery"],
			experiences: 3,
			projects: 0,
		},
		{
			name: "John Doe",
			themes: ["AngularJS1", "AngularJS2", "Bootstrap", "JQuery"],
			experiences: 2,
			projects: 1,
		},
		{
			name: "José Silva da Souza",
			themes: ["AngularJS1", "Bootstrap"],
			experiences: 2,
			projects: 1,
		},
		{
			name: "Jane Smith",
			themes: ["AngularJS1", "Bootstrap"],
			experiences: 1,
			projects: 1,
		},
		{
			name: "Maria dos Santos",
			themes: ["AngularJS"],
			experiences: 1,
			projects: 0,
		},
		{
			name: "João Pessoa",
			themes: ["Bootstrap"],
			experiences: 0,
			projects: 0,
		},
		{
			name: "Anne Smith",
			themes: ["AngularJS2"],
			experiences: 0,
			projects: 0,
		},
		{
			name: "Jack Freeman",
			themes: ["JQuery"],
			experiences: 0,
			projects: 0,
		},
	];
};

})();
