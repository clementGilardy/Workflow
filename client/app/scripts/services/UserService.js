angular.module('workflowApp')
  .factory('UserService', ['Customer','$rootScope','Cu_role', function(Customer,$rootScope,Cu_role){

    function getUserById(id){
      return Customer.findById({id:id});
    }

    function getAllUserById(arrayId,users){
      angular.forEach(arrayId,function(value){
        Customer.findById({id:value},function(user){
          users.push(user);
        });
      });
    }

    function isAdmin(test){
       Customer.findById({id:Customer.getCurrentId()},function(user){
         Cu_role.findById({id:user.roleId},function(role){
          test((role.name == "admin"?true:false));
        });
      });
    }

    function getUserByMail(email){
      return Customer.find({filter:{where:{email:email}}});
    }

    return {
      getUserById:getUserById,
      getUserByMail:getUserByMail,
      isAdmin:isAdmin,
      getAllUserById:getAllUserById

    };

  }]);
