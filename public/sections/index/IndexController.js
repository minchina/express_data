(function(global, angular){
    angular.module("toDoApp")
        .controller("IndexController", function ($scope, $log, $state, application, users, ToDoService) {
            $log.info("indexController has been called");

            var vm = this;
            vm.application = application;
            vm.users = users;
            vm.searchTodoNumber = '';
            vm.update = update;

            function update() {
                if (vm.searchTodoNumber) {
                    ToDoService.updateTodos(vm.searchTodoNumber);
                }
            }

        });
})(this, angular);

