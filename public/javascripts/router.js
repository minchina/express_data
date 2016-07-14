(function(global, angular) {
    angular.module("toDoApp", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('showToDo', {
                url:'/',
                templateUrl: 'sections/index.html',
                controller:'IndexController',
                controllerAs: 'vm'
            });

        $urlRouterProvider.otherwise("/")
    })
})(this, angular);