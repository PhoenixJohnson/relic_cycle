// declare top-level module which depends on filters,and services
var Cycle = angular.module('Cycle',
    [
        'ngRoute',
        'ngResource',
		'ngResource'

    ]);

// bootstrap angular
Cycle.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {

	//$httpProvider.responseInterceptors.push('AuthInterceptor');
    //$locationProvider.html5Mode(true);
//	$locationProvider.html5Mode(true).hashPrefix('!');

    $routeProvider.when('/ui/', {
        templateUrl: 'partials/home.html',
        controller:'HomeController'
    });

    $routeProvider.when('/ui/Reports', {
        templateUrl: 'reports/reportMain.html',
        controller: 'reportCtrl'
    });
    $routeProvider.when('/ui/XMLMapping',{
        templateUrl:'partials/xml-mapping.html',
        controller:'xmlMappingCtrl'
    })
    $routeProvider.otherwise({
        redirectTo: '/ui/'
    });

}]);

// this is run after angular is instantiated and bootstrapped
Cycle.run(function ($rootScope, $location, $http, $timeout, AuthService, conf) {


    // *****
    // Initialize authentication
    // *****

    $rootScope.myTheme="skin-blur-violate";
    $rootScope.authService = AuthService;
    $rootScope.postBoardNotifier = new NotificationManager($rootScope);
    $rootScope.ProjcetName = conf.PROJECT_NAME;


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