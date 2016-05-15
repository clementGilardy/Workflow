'use strict';

/**
 * @ngdoc function
 * @name workflowApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the workflowApp
 */

angular.module('workflowApp')
  .controller('TasksCtrl', function (ProjectService,$scope,Customer) {

  }).controller('FormAddCtrl',function(ProjectService,$scope,Customer,TasksService){
    $scope.data = {
      projectUser:ProjectService.getAll(Customer.getCurrentId()),
      priority:TasksService.getPriority()
    }
});
