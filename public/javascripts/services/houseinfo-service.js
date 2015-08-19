angular.module("houseinfo")
    .factory("houseinfoservice", function($http){


        var getRegions = function(){
            return $http.get('getRegions');
        };

        var getTypes = function(){
            return $http.get('getTypes');
        };

        var searchHouseInfo = function(region, type){
            return $http.post("searchHouseInfo",{region:region, type:type});
        };

        return {
            getRegions: getRegions,
            getTypes: getTypes,
            searchHouseInfo:searchHouseInfo
        }
    });