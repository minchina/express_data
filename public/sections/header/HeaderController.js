angular.module("toDoApp")

.controller("HeaderController", function($log, $state){
    var vm=this;
    vm.goAbout=goAboutPage;
    vm.homePage = homePage;
    vm.label="Panel";

    function goAboutPage() {
        $state.go('about');
    }

    function homePage() {
        $state.go("index");
    }
    $log.info("This is Header")
});