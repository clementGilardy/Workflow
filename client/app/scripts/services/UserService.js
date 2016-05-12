angular.module('workflowApp')
  .factory('UserService', ['Customer','$rootScope', function(Customer,$rootScope){

    function getUserById(id){
      return Customer.findById({id:id});
    }

    function isAdmin(){
      return Customer.findById({id:Customer.getCurrentId()},function(user){
        return (user.roleId == 1?true:false);
      });
    }

    function getUserByMail(email){
      return Customer.find({filter:{where:{email:email}}});
    }

    return {
      getUserById:getUserById,
      getUserByMail:getUserByMail,
      isAdmin:isAdmin
    };

  }]);
