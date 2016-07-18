(function (global, angular) {
    angular.module('toDoApp.service')
        .factory('_', ['$window', function($window) {
            return $window._;
        }]);

})(this, angular);