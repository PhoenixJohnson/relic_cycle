/**
 * Created by phoenix on 14/11/7.
 */
function ClockCtrl($scope,time){
    $scope.time = time;
}

PRM.controller('DatepickerDemoCtrl', function ($scope,$rootScope) {

    $scope.today = function() {
        $scope.dt = new Date(new Date().getTime()-86400000);
    };
    $scope.dt = new Date(new Date().getTime()-86400000);
    $scope.dt1 = new Date(new Date().getTime());
    // Disable weekend selection
    $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
});
