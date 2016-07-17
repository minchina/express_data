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
            retireveTodos: retireveTodos
        };

        function retireveTodos() {
            return $q.when(123)
                .then(function (result) {
                    return _resourceToDos.query().$promise;
                })

        }

        function updateTodos(params) {
            return $q.when(123)
            .then(function(todoNumber) {
                return _resourceToDos.save().$promise;
            })
        }

    }
})(this, angular);