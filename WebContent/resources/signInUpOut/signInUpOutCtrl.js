angular.module("mainApp")
    .controller("signInUpOutCtrl", ["$scope", "$rootScope", "$http", "$window", function($scope, $rootScope, $http, $window) {
        $scope.signInUpOutUrl = "resources/signInUpOut/signInUpView.html";
        $scope.signInUpOutUrlTrigger = function() {
            $scope.signInUpOutUrl = "resources/signInUpOut/signOutView.html"
        };

        //$scope.sendAuthorization = function() {
        //
        //    $rootScope.$broadcast("authorization", {
        //        authorization: $scope.authorization
        //    });
        //    //console.log($scope.authorization);
        //};

        $scope.emitAuthorization = function() {
            $scope.$emit("authorization", {
                authorization: $scope.authorization
            });
        };

        $scope.signInUser = function(userDetails, isValid) {
            if(isValid) {
                console.log("yeah");
                //$scope.jsonUserDetails = angular.toJson(userDetails);
                //console.log($scope.jsonUserDetails);
                //console.log(userDetails);

                //--Start---Working code for authorization!---
                //$http.post("http://localhost:8080/yimin/api/authenticate", userDetails)
                //    .then(
                //        function(data, status, headers, config) {
                //        $window.sessionStorage.token = data.token;
                //        $scope.message = 'Welcome';
                //        },
                //        function(data, status, headers, config) {
                //            delete $window.sessionStorage.token;
                //            $scope.message = 'Error: Invalid email or password';
                //        }
                //    )
                //---End---Working code for authorization!---

                //--Start---Realization only for PhpStorm!---
                $scope.authorization = true;
                $scope.emitAuthorization();
                //--End---Realization only for PhpStorm!---

            }
            else {
                $scope.showError = true;
            }

            $scope.getError = function(error) {
                if(angular.isDefined(error)) {
                    if(error.required) {
                        return "Field can't be empty"
                    }
                    if(error.email) {
                        return "Type email correctly"
                    }
                }
            }
        }
    }]);