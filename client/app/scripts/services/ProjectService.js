angular.module('workflowApp')
  .factory('ProjectService', ['Project','UserService','$location','$rootScope','Customer', function(Project,UserService,$location,$rootScope,Customer){

    function getAllProjectUser(id){
      return Project.find({filter:{where:{participantIds:id}}},function(data){
        angular.forEach(data,function(value){
          if(typeof value.authorId != '')
          {
            var idAuthor = value.authorId;
            value.authorId = UserService.getUserById(idAuthor);
          }

          if(typeof value.managerId != '') {
            var idManager = value.managerId;
            value.managerId = UserService.getUserById(idManager);
          }

        });

      });
    }

    function addParticipant(email,projectId){
      Project.findById({id:projectId}).$promise.then(function(project){

        UserService.getUserByMail(email).$promise.then(function(user){
          project.participantIds.push(user[user.length-1].id);
          project.$save();
        });

      });
    }

    function getOne(id){
      return Project.findById({id:id},function(data){
        if(typeof data.authorId != 'undefined')
        {
          var idAuthor = data.authorId;
          data.authorId = UserService.getUserById(idAuthor);
        }

        if(typeof data.managerId != 'undefined') {
          var idManager = data.managerId;
          data.managerId = UserService.getUserById(idManager);
        }

      });
    }

    function addProject(titre,desc,author,manager,date){
      return Project.create({title:titre,description:desc,authorId:author,managerId:[manager],participantIds:[manager],date_creation:date},function(){
        $location.path('/project');
      });
    }


    return {
      getAll:getAllProjectUser,
      getOne:getOne,
      add:addProject,
      addParticipant:addParticipant
    };

  }]);
