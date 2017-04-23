"use strict";

(function () {
	function LunchCheckController($scope) {
		$scope.input = "";
		$scope.checkInput = function () {
			if ($scope.input === "") {
				$scope.output = "Please enter data first";
			} else {
				var count = 0;
				var items = $scope.input.split(",");
				for (var i=0; i<items.length; ++i) {
					if (items[i].search(/\S/) !== -1) {
						++count;
					}
				}
				$scope.output = count>3 ? "Too much!" : "Enjoy!";
			}
		};
	}
	LunchCheckController.$inject = ["$scope"];
	angular.module("LunchCheck", []).controller("LunchCheckController",
	                                            LunchCheckController);
})()

