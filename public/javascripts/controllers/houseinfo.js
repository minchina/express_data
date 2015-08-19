var app = angular.module("houseinfo", []);
app.controller("houseinfocontroller", ["$scope", "houseinfoservice", function ($scope, houseinfoservice) {


    houseinfoservice.getRegions().success(function (regions) {
        $scope.regions = regions;
    });
    houseinfoservice.getTypes().success(function (types) {
        $scope.types = types;
    });

    $scope.searchHouseInfo = function () {
        houseinfoservice.searchHouseInfo($scope.selectedregion, $scope.selectedtype).success(function (data) {
            $scope.items = data;
        })
    }

}]);