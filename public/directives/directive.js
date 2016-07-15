(function(global, angular){
    angular.module('toDoApp.directive', ['ngResource'])
    .constant("TODO_DIRECTIVE_PATH", "/directives");
})(this, angular);