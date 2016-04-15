'use strict';

/**
 * @ngdoc function
 * @name workflowApp.controller:IndexCtrl
 * @description
 * # ConnexionCtrl
 * Controller of the workflowApp
 */
angular.module('workflowApp')
  .controller('IndexCtrl', function ($scope,$cookies,Customer,$rootScope,$notification,AuthService) {

    $scope.deconnexion = function(){
      AuthService.logout();
    };

    if(Customer.isAuthenticated())
    {
      $rootScope.isAuth = true;
      $rootScope.notify = false;
      $notification.notify("images/success.png","Connexion", "Vous êtes bien connecté", "");
    }

  });
