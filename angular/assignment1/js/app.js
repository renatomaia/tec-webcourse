(function () {
	function LunchCheckController($scope) {
		$scope.input = "";
		$scope.checkInput = function () {
			if ($scope.input === "")
				$scope.output = "Please enter data first";
			else if ($scope.input.split(',', 4).length > 3)
				$scope.output = "Too much!";
			else
				$scope.output = "Enjoy!";
		};
	}
	LunchCheckController.$inject = ["$scope"];
	angular.module('LunchCheck', []).controller("LunchCheckController",
	                                            LunchCheckController);
})()

