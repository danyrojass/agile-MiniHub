'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the appApp
 */
 angular.module('appApp')
   .controller('HomeCtrl', ['$scope','$rootScope', '$http',
       function($scope, $rootScope, $http) {
         $scope.repoData = {};
         $scope.username = $rootScope.username;
         $scope.credentials = $rootScope.credentials;
	       $scope.auth = $rootScope.auth;

         var authorization = {'Authorization': $scope.credentials};
         var header = { headers: authorization };

         (function initialize() {
		        getRepo();
          })();

          function getRepo() {
            $http.get('https://api.github.com/users/'+$scope.username+'/repos', header).success(function(data) {
               $scope.repoData = data;
             });
           }

          $scope.buscarUsuario = function(){
            var usuario = document.getElementById('usuario').value;
            $rootScope.credentials = $scope.credentials;
            $http.get('https://api.github.com/users/'+usuario, header).success(
              function(data) {
               $scope.username = usuario;
               $scope.infoUser = data;
               getRepo();
             });
          };
       }
  ]);
