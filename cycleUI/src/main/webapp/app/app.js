// declare top-level module which depends on filters,and services
angular.element(document).ready(function () {

    $(window).off('hashchange');
    $(document).off('click', '#fullPage-nav a');
    $('.section').off('click', '.toSlide');
    $(document).off('click', '.fullPage-slidesNav a');
    $('#fullpage').fullpage({
        anchors: ['cyclePage'],
        //menu:"#fullMenu",
        //sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
        css3: true,
        //Navigation
//                menu: false,
//                anchors:['firstPage', 'secondPage'],
//                navigation: false,
//                navigationPosition: 'right',
//                navigationTooltips: ['firstSlide', 'secondSlide'],
//                showActiveTooltips: false,
//                slidesNavigation: true,
//                slidesNavPosition: 'bottom',
//                //Accessibility
//                keyboardScrolling: true,
//                animateAnchor: true,
//                recordHistory: true,
//
//                //Design
                controlArrows: false
//                verticalCentered: true,
//                resize : false,
//                sectionsColor : ['#ccc', '#fff'],
//                paddingTop: '3em',
//                paddingBottom: '10px',
//                fixedElements: '#header, .footer',
//                responsive: 0

        //Custom selectors
//                sectionSelector: '.section',
//                slideSelector: '.slide',
//
//                //events
//                onLeave: function(index, nextIndex, direction){},
//                afterLoad: function(anchorLink, index){},
//                afterRender: function(){},
//                afterResize: function(){},
//                afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
//                onSlideLeave: function(anchorLink, index, slideIndex, direction){}
    });

});
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

    $rootScope.myTheme="skin-blur-city";
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