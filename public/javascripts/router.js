(function(global, angular) {
    angular.module("toDoApp", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('showToDo', {
                url:'/test',
                templateUrl: 'javascripts/controllers/test.html',
                controller:'ToDoController'
            });

        $urlRouterProvider.otherwise("/test")
    })
})(this, angular);