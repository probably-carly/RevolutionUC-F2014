app.controller('SignUpCtrl', function ($scope, $modal, $log) {
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
            $scope.$dismiss();
            toastr.error("Forgotten!");
        };

        $scope.submit = function () {
            $http.post('/api/newuser', $scope.user).success(function (responseData) {
                if (responseData.err) {
                    toastr.error("It looks like you've signed up already!", "Oh Dear!");
                    console.log("User already signed up!");
                } else {
                    $scope.$dismiss();
                    toastr.success("We'll see you there!");
                }
            });
        };


        $scope.uploadResume = function () {
            $window.filepicker.pick(function (uploadedFile) {
                $scope.$apply($scope.user.resume = uploadedFile.filename);
            });
        }
    });
