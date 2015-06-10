Cycle.controller('LightboxCtrl', ['$scope', '$filter', '$rootScope','Lightbox', function ($scope,$filter,$rootScope,Lightbox) {
    $scope.alert = function (message) {
        $window.alert(message);
    };

}]);
