(function (global, angular) {
    angular.module("toDoApp", ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('root', {
                    url: '',
                    abstract: true,
                    resolve: {
                        application: ["$log", function ($log) {
                            $log.info("entered root application")
                        }]
                    },
                    views: {}
                })
                .state('index', {
                    url: '/',
                    parent: 'root',
                    views: {
                        '@': {
                            templateUrl: 'sections/index.html',
                            controller: 'IndexController',
                            controllerAs: 'vm'
                        }
                    }

                })


            $urlRouterProvider.otherwise("/")
        })
})(this, angular);