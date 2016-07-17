(function (global, angular) {
    angular.module("toDoApp", ['ui.router', 'toDoApp.service'])
        .constant("SECTION", "sections")
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('root', {
                    url: '',
                    abstract: true,
                    resolve: {
                        'application': ["$log", function ($log) {
                            return function (){
                                return "123";
                            }
                        }],
                        'users' : ["ToDoService", function(ToDoService) {
                            return ToDoService.retireveTodos();
                        }]
                    },
                    views: {
                        header: {
                            templateUrl:'sections/header/header.html',
                            controller: 'HeaderController',
                            controllerAs: 'vm'
                        },
                        footer: {
                            templateUrl:'sections/footer/footer.html',
                            controller: 'FooterController',
                            controllerAs: 'vm'
                        }

                    }
                })
                .state('index', {
                    url: '/',
                    parent: 'root',
                    views: {
                        'content@': {
                            templateUrl: 'sections/index/index.html',
                            controller: 'IndexController',
                            controllerAs: 'vm'
                        }
                    }
                })
                .state('about', {
                    url: '/about',
                    parent: 'root',
                    views: {
                        'content@': {
                            templateUrl: 'sections/about/about.html',
                            controller: 'AboutController',
                            controllerAs: 'vm'
                        }
                    }
                })

            ;
            $urlRouterProvider.otherwise("/")
        })
})(this, angular);