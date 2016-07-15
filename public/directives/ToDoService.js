(function (global, angular) {
    angular.module('toDoApp.directive')
        .service('ToDoService', ['$resource', '$q', ToDoService]);

    function ToDoService($resource, $q) {
        var _serviceApiPath = "/api/todo/:todoNumber",
            _resourceToDos = $resource(_serviceApiPath,
                {
                    todoNumber: "@todoNumber"
                },
                {
                    'create': {method: 'POST'},
                    'update': {method: 'PUT'}
                }
            );

        return {
            retireveTodos: retireveTodos
        };

        function retireveTodos() {
            return $q.when(123)
                .then(function (result) {
                    return _resourceToDos.query().$promise;
                })

        }

    }
})(this, angular);