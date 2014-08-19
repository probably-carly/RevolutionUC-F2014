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
.controller('SignUpInstanceCtrl', function ($scope, $http, $window) {
	$scope.user = {};

	$scope.forgetIt = function () {
		alert($scope.user.Name);
	};

	$scope.submit = function () {
		$http.post('/api/newuser', $scope.user).success(function (responseData) {
			console.log(responseData);
		});
	};

  $scope.uploadResume = function () {
    $window.filepicker.pick(function(InkBlob){
      console.log(InkBlob.url);
    });
  }

});
