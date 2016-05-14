angular.module('workflowApp')
  .factory('ProjectService', ['Project','UserService','$location','$rootScope','$timeout', function(Project,UserService,$location,$rootScope,$timeout){

    function getAllProjectUser(id){
      return Project.find({filter:{where:{participantIds:id}}},function(data){
        angular.forEach(data,function(value){
          if(typeof value.authorId != 'undefined')
          {
            var idAuthor = value.authorId;
            value.authorId = UserService.getUserById(idAuthor);
          }

          if(typeof value.managerId != 'undefined') {
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
          project.$save(function(){
            //success
            $rootScope.SuccessEmail = "L'utilisateur à bien été ajouté au projet !";
            $timeout(function(){
              $rootScope.SuccessEmail = null;
            }, 3000);
          },function () {
            //failed
            $rootScope.ErrorEmail = "L'utilisateur participe déjà au projet ou il n'est pas inscrit !";
            $timeout(function(){
              $rootScope.ErrorEmail = null;
            }, 3000);

          });
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

        if(typeof data.participantIds != 'undefined'){
          var arrayIdUser = data.participantIds;
          var users = [];
          UserService.getAllUserById(arrayIdUser,users);
          data.participantIds = users;
        }


      });
    }

    function addProject(titre,desc,author,manager,date){
      return Project.create({title:titre,description:desc,authorId:author,managerId:manager,participantIds:manager,date_creation:date},function(){
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
