'use strict';

/**
 * @ngdoc overview
 * @name workflowApp
 * @description
 * # workflowApp
 *
 * Main module of the application.
 */
angular
  .module('workflowApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'lbServices'
  ])
  .config(function ($routeProvider,LoopBackResourceProvider) {
    LoopBackResourceProvider.setUrlBase('http://localhost:3000/api');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/project', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl',
        controllerAs: 'project'
      })
      .when('/add-project',{
        templateUrl:'views/project/add.html',
        controller: 'ProjectCtrl',
        controllerAs: 'project'
      })
      .when('/tasks',{
        templateUrl: 'views/task/tasks.html',
        controller: 'TasksCtrl',
        controllerAs: 'tasks'
      })
      .when('/add-task',{
        templateUrl: 'views/task/add.html',
        controller: 'FormAddCtrl',
        controllerAs: 'tasks'
      })
      .when('/connexion',{
        templateUrl: 'views/connexion.html',
        controller: 'ConnexionCtrl',
        controllerAs: 'connexion'
      })
      .when('/contact',{
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/inscription',{
        templateUrl: 'views/inscription.html',
        controller: 'InscriptionCtrl',
        controllerAs: 'inscription'
      })
      .when('/detail-project/:id',{
        templateUrl: 'views/project/detail.html',
        controller: 'detailProjectCtrl',
        controllerAs: 'project'
      })
      .when('/admin',{
        templateUrl: "views/admin/admin.html",
        controller: "AdminCtrl",
        controllerAs: 'admin'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
