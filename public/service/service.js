(function(global, angular){
    angular.module('toDoApp.service', ['ngResource'])
    .constant("TODO_DIRECTIVE_PATH", "/service");
})(this, angular);