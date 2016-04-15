angular.module('workflowApp')
  .factory('UserService', ['Customer','$rootScope', function(Customer,$rootScope){

    function getUserById(id){
      return Customer.findById({id:id});
    }

    function getUserByMail(email){
      return Customer.find({filter:{where:{email:email}}});
    }

    return {
      getUserById:getUserById,
      getUserByMail:getUserByMail
    };

  }]);
