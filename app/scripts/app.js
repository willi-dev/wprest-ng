'use strict';

/**
 * @ngdoc overview
 * @name wprestNgApp
 * @description
 * # wprestNgApp
 *
 * Main module of the application.
 */
angular
    .module('wprestNgApp', [ 'ngAnimate','ngCookies','ngResource','ngRoute','ngSanitize','ngTouch'])
    .config( function( $routeProvider, $locationProvider ) {
        // set default hashPrefix
        $locationProvider.hashPrefix('');
        // route
        $routeProvider
            // index / home
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            
            // view about
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about',
            })

            // view single post
            .when('/post/:postid', {
                templateUrl: 'views/post.html',
                controller: 'PostCtrl',
                controllerAs: 'post',
            })

            .otherwise({
                redirectTo: '/'
            });
    });