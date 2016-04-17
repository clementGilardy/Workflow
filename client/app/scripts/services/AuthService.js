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
        .$promise.then(function(){
            $rootScope.errorRegister = null;
          $location.path('/');
        },
        function(reason){
          if(reason.data.error.details.messages.hasOwnProperty("email")) {
            $rootScope.errorRegister = "L'email entré existe déjà !";
          }

          if(reason.data.error.details.messages.hasOwnProperty("username")){
            $rootScope.errorRegister = "Le nom d'utilisateur est déjà présent !";
          }

          if(reason.data.error.details.messages.hasOwnProperty("username") &&
            reason.data.error.details.messages.hasOwnProperty("email")){
            $rootScope.errorRegister = "Le nom d'utilisateur et l'email sont déjà présents !";
          }
        });
    }

    return {
      login:login,
      logout:logout,
      register:register,
      getUser:getUser
    };
  }]);
