'use strict';
 angular.module('wivApp', ['ngRoute'])
 	.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            // route for the contactus page
            .when('/login', {
                templateUrl : 'login.html'
            })
            // route for the menu page
            .when('/platform', {
                templateUrl : 'platform.html',
                controller : 'AnnouncementController'
            })
            .otherwise('/login');
    }])
;