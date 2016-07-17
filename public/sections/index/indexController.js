(function(global, angular){
    angular.module("toDoApp")
        .controller("IndexController", function ($scope, $log, $state, application, users) {
            var vm = this;
            vm.application = application;
            vm.users = users;

            $log.info("indexController has been called");

        });
})(this, angular);

