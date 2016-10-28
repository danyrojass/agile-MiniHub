'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:GhrepoCtrl
 * @description
 * # GhrepoCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('GhrepoCtrl', ['$scope', '$rootScope', '$http',
      function($scope, $rootScope, $http)  {

         $scope.username = '';
         $scope.password = '';
         $scope.token = '';
	       $scope.auth = false;

         $scope.userAuth = function () {
            var url = 'https://api.github.com/user';

            var credentials = btoa($scope.username + ':' + $scope.password);
            var authorization = {'Authorization': 'Basic ' + credentials};
            var header = { headers: authorization };
            $scope.token = credentials;
            return $http.get(url, header).then(
              function(response) {
                $rootScope.username = $scope.username;
                $rootScope.token = $scope.token;
                $rootScope.infoUser = response.data;
		            $rootScope.auth = true;
                window.open('#/home', '_self',false);
              }, function(){
                $scope.username = '';
                $scope.password = '';
		            $rootScope.auth = false;
                window.alert('¡Username o password incorrecto!');
              }
            );
         };
    }
 ]);
