(function () { 'use strict';

angular.module('TecKHow').config(ViewStateConfig);

ViewStateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function ViewStateConfig($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/exp-list');
	$stateProvider
		.state('exp-list', {
			url: '/exp-list',
			templateUrl: 'ng/teckhow/ui/exp-list/template.html',
			controller: MockCtrl,
		})
	;
}

function MockCtrl($scope) {
	var experience = [
		{
			themes: ["Português"],
		},
		{
			title: "Revisão da Ponte MPA-OPC",
			themes: ["Lua", "LuaCOMGen", "OPC", "COM"],
			description: "bla, bla, bla...",
		},
		{
			date: 2017,
			title: "Curso Web Front-End",
				themes: ["HTML5", "CSS", "JavaScript", "AngularJS1", "Bootstrap"],
			description: "bla, bla, bla...",
		},
		{
			date: 2016,
			title: "Protocolo OpenBus 2.0",
			themes: ["OpenSSL", "Java", "C++", "Lua"],
			description: "bla, bla, bla...",
		},
		{
			date: 2009,
			title: "Doutorado em Informática",
				themes: ["CDN", "C++", "Lua", "CORBA"],
			description: "bla, bla, bla...",
		},
		{
			date: 2009,
			title: "Compilação MPA no VXL",
			themes: ["OpenVXL", "VMS"],
			description: "bla, bla, bla...",
		},
		{
			date: 2004,
			title: "Mestrado em Informática",
				themes: ["CCM", "CORBA", "Lua"],
			description: "bla, bla, bla...",
		},
		{
			date: 1997,
			title: "Curso de Inglês",
			themes: ["Inglês"],
		},
	];
	var count = {};
	var themeList = [];
	for (var i=0; i<experience.length; ++i) {
		var themes = experience[i].themes;
		for (var j=0; j<themes.length; ++j) {
			var theme = themes[j];
			if (count[theme] === undefined) {
				count[theme] = 0;
				themeList.push(theme);
			}
			count[theme] += 1;
		}
	}
	themeList.sort();
	$scope.experience = experience;
	$scope.themes = themeList;
	$scope.count = count;
};

})();
