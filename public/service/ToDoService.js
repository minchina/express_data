(function (global, angular) {
    angular.module('toDoApp.service')
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
            retireveTodos: retireveTodos,
            updateTodos, updateTodos
        };

        function retireveTodos() {
            return $q.when()
                .then(function (result) {
                    return _resourceToDos.query().$promise;
                })

        }

        function updateTodos(todoNumber) {
            return $q.when(todoNumber)
                .then(function (todoNumber) {
                    return _resourceToDos.update({"todoNumber": todoNumber}).$promise;
                })
        }

    }
})(this, angular);