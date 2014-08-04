angular.module('RevUc', ['ui.bootstrap'])
.controller('SignUpCtrl', function ($scope, $modal, $log) {
	
	$scope.open = function () {
		var modalInstance = $modal.open({
			templateUrl: 'views/signup.html',
			controller: 'SignUpInstanceCtrl',
			size: 'lg'
		});
	};
})
.controller('SignUpInstanceCtrl', function ($scope, $modalInstance) {
	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
});
