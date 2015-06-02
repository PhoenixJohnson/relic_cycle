// declare top-level module which depends on filters,and services
var PRM = angular.module('PRM',
    [
		'ngTableExport',
		'ngAnimate',
		'highcharts-ng',
		'ngTable',
		'ui.unique',
		'ngRoute',
		'ngResource',
		'clockPlugin',
		'angularModalService',
		'angular-flexslider',
		'ui.bootstrap',
		'ngAside',
		'ui.tree'
    ]);
PRM.value('BrandRefreshData',[]);

// bootstrap angular
PRM.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {

	//$httpProvider.responseInterceptors.push('AuthInterceptor');
    $locationProvider.html5Mode(true);
//	$locationProvider.html5Mode(true).hashPrefix('!');

    $routeProvider.when('/', {
        templateUrl: 'partials/home.html',
        controller:'HomeController'
    });

    $routeProvider.when('/Reports', {
        templateUrl: 'reports/reportMain.html',
        controller: 'reportCtrl'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });

}]);

// this is run after angular is instantiated and bootstrapped
PRM.run(function ($rootScope, $location, $http, $timeout, AuthService, PRMconf) {


    // *****
    // Initialize authentication
    // *****

    $rootScope.myTheme="";
    $rootScope.authService = AuthService;
    $rootScope.postBoardNotifier = new NotificationManager($rootScope);
    $rootScope.ProjcetName = PRMconf.PROJECT_NAME;


    // text input for login/password (only)
    $rootScope.loginInput = 'yunjiang@relic.com';
    $rootScope.passwordInput = 'complexpassword';

    $rootScope.$watch('authService.authorized()', function () {

        // if never logged in, do nothing (otherwise bookmarks fail)
        if ($rootScope.authService.initialState()) {
            // we are public browsing
            return;
        }

        // instantiate and initialize an auth notification manager
        $rootScope.authNotifier = new NotificationManager($rootScope);

        // when user logs in, redirect to home
        if ($rootScope.authService.authorized()) {
            //$location.path("/");
            $rootScope.authNotifier.notify('information', 'Welcome ' + $rootScope.authService.currentUser() + "!");
        }

        // when user logs out, redirect to home
        if (!$rootScope.authService.authorized()) {
            $location.path("/");
            $rootScope.authNotifier.notify('information', 'Thanks for visiting.  You have been signed out.');
        }

    }, true);


});