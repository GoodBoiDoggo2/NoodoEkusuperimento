console.log("APP MODULE REACHED!");
//	angular.module('app',[
//		'ngRoute',
//		'appRoutes',
//		'angularController',
//		'catalogController',
//		'itemController',
//		'catalogService',
//		'userService'
//		]);

var appModule =
    angular
    .module('app', [
        /* Shared Modules */
        'app.core',
        /* Feature Modules */
        //      'app.welcome',
        'app.catalog',
        'app.item',
        'app.register',
        'app.login',
        'app.profile'
    ]);
appModule.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);

function run($rootScope, $location, authentication, FB) {
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
        if ($location.path() === '/profile') {
            if ($location.search().fbid) {
                console.log($location.search().fbid);
                //fbcode

                console.log('messenger auth process');
                FB.fbLoggedIn($location.search().fbid)
                    .then(function(res) {
                        console.log(res.data[0]);
                        if (!res.data[0].loginsession) {
                            console.log(res.data[0].loginsession);
                            $location.path('/login');

                        }
                    }, function(err) {
                        console.log('Fbid not registered.');
                        $location.path('/login');
                    });
                // if (!) {
                //     $location.path('/login');
                // }
            } else if (!authentication.isLoggedIn()) {
                $location.path('/login');
            }
        }

    });
}

appModule.run(['$rootScope', '$location', 'authentication', 'FB', run]);