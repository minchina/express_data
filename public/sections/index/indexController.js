(function(global, angular){
    angular.module("toDoApp")
        .controller("IndexController", function ($scope, $log, $state, application, ToDoService) {
            var vm = this;
            vm.staticText = "HOME PAGE";
            vm.id = 1;
            vm.application = application;
            vm.users = [];
            ToDoService.retireveTodos().then(function (response) {
                vm.users = response;
            });

            $log.warn("broker id is:" + vm.application());

        });
})(this, angular);

