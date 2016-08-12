(function (global, angular) {
    angular.module('toDoApp.directive')
        .directive('tdMax', function(){
            return {
                restrict:'EA',
                require:'?ngModel',
                link:function(scope, elm, attr, ctrl) {
                    if (!ctrl) return;

                    var max = 0;
                    attr.$observe('tdMax', function(value) {
                        max = toInt(value) || 0;
                        ctrl.$validate();
                    });
                    ctrl.$validators.max = function(modelValue, viewValue) {
                        return ctrl.$isEmpty(viewValue) || viewValue >= max;
                    };
                }

            };

        });
})(this, angular);
