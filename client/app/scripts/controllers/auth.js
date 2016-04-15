'use strict';

/**
 * @ngdoc function
 * @name workflowApp.controller:ConnexionCtrl
 * @description
 * # ConnexionCtrl
 * Controller of the workflowApp
 */
angular.module('workflowApp')
  .controller('ConnexionCtrl', function ($rootScope,$scope,AuthService,$location) {
    $scope.master = {};
    $scope.update = function (user) {
      $scope.master = angular.copy(user);
      AuthService.login($scope.master.email,$scope.master.password).then(function(){
        $location.path('/');
      });
    };
  }).controller('InscriptionCtrl', function ($scope,AuthService) {
  $scope.master = {};
  $scope.add = function (user) {
    $scope.master = angular.copy(user);
    AuthService.register($scope.master.email,
      $scope.master.password,
      $scope.master.fullname,
      $scope.master.pseudo);
  };

});
