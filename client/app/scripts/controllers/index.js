'use strict';

/**
 * @ngdoc function
 * @name workflowApp.controller:IndexCtrl
 * @description
 * # ConnexionCtrl
 * Controller of the workflowApp
 */
angular.module('workflowApp')
  .controller('IndexCtrl', function ($scope,$cookies,Customer,$rootScope,AuthService) {

    $scope.deconnexion = function(){
      AuthService.logout();
    };

    if(Customer.isAuthenticated())
    {
      $rootScope.isAuth = true;
      $rootScope.notify = false;
    }

  }).controller('HeaderCtrl',function($scope,$location){
      $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
      };
});
