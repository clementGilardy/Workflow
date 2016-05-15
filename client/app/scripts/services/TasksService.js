angular.module('workflowApp')
  .factory('TasksService', ['Task','Ta_priority', function(Task,Ta_priority){

    function getPriority(){
      return Ta_priority.find();
    }

    return {
      getPriority:getPriority
    };

  }]);
