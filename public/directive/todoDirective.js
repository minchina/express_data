(function (global, angular) {
    angular.module('toDoApp.directive')
    .directive('todoDirective', function(){
        return {
            restrict:'EA',
            binding: {
                "applicant" : "@"
            },
            template: '<h1>This is todo directive</h1>',
            controller: ("todoDirectiveController", todoDirectiveController)
        };

        todoDirectiveController.$inject = ["$log"];

        function todoDirectiveController($log){
            $log.info("Test");
        }

    });
})(this, angular);
