angular.module('workflowApp')
  .factory('AuthService', ['$rootScope','Customer','$cookies','$location', function($rootScope,Customer,$cookies,$location){

    function login(email,password) {
      return Customer.login({email: email, password: password})
        .$promise
        .then(function () {
          $rootScope.isAuth = true;
          $rootScope.notify = true;
          $location.path('/');
        });
    }

    function getUser(id){
      return Customer.findById({id:id});
    }

    function logout(){
      return Customer.logout()
        .$promise
        .then(function(){
            $rootScope.isAuth = true;
            $location.path('/');
        },function(){
            $rootScope.isAuth = false;
            $rootScope.notify = false;
            $location.path('/connexion');
        });
    }

    function register(email,password,fullname,pseudo){
      return Customer.create({ email: email,
          password: password,
          username: pseudo,
          realm: fullname})
        .$promise;
    }

    return {
      login:login,
      logout:logout,
      register:register,
      getUser:getUser
    };
  }]);
