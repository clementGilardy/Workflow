'use strict';

/**
 * @ngdoc function
 * @name workflowApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the workflowApp
 */
angular.module('workflowApp')
  .controller('ProjectCtrl', function (ProjectService,$scope,Customer) {
    $scope.allProject = ProjectService.getAll(Customer.getCurrentId());

  }).controller('addProjectCtrl', function (ProjectService,$scope,Customer) {
  $scope.create = function(project){
    ProjectService.add(project.title,project.description,Customer.getCurrentId(),[Customer.getCurrentId()],new Date());
  };

}).controller('detailProjectCtrl', function (ProjectService,UserService,$scope,$routeParams,$rootScope) {
  $scope.project = ProjectService.getOne($routeParams.id);
  $scope.display = function(){
    $scope.emailParticipant = true;
    $('#modalEmailParticipant').modal("show");
  }
  $scope.addNewParticipant = function(mail,projectId){
    $scope.email = angular.copy(mail);
    $scope.projectId = angular.copy(projectId);
    if(typeof $scope.email != 'undefined'){
      $rootScope.errorMail = false;
      ProjectService.addParticipant($scope.email.text,$scope.projectId);
    }
    else{
      $rootScope.errorMail = true;
    }
  }
});
