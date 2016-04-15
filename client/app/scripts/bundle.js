(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
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
      .otherwise({
        redirectTo: '/'
      });
  });

},{}],2:[function(require,module,exports){
'use strict';

/**
 * @ngdoc function
 * @name workflowApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the workflowApp
 */
angular.module('workflowApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

},{}],3:[function(require,module,exports){
'use strict';

/**
 * @ngdoc function
 * @name workflowApp.controller:ConnexionCtrl
 * @description
 * # ConnexionCtrl
 * Controller of the workflowApp
 */
angular.module('workflowApp')
  .controller('ConnexionCtrl', function ($scope) {
    $scope.master = {};
    $scope.update = function (user) {
      $scope.master = angular.copy(user);
    };

    User.login({
      email:$scope.master.email,
      password:$scope.master.password
    });

  });

},{}],4:[function(require,module,exports){
'use strict';

/**
 * @ngdoc function
 * @name workflowApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the workflowApp
 */
angular.module('workflowApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

},{}],5:[function(require,module,exports){
'use strict';

/**
 * @ngdoc function
 * @name workflowApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workflowApp
 */
angular.module('workflowApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

},{}]},{},[1,2,3,4,5]);
