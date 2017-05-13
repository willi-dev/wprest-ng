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
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about',
            })

            .when('/post/:postid', {
                templateUrl: 'views/post.html',
                controller: 'PostCtrl',
                controllerAs: 'post',
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.hashPrefix('');
    })
    .controller('TestContent', function( $scope, $http, $routeParams ){
        console.log( $routeParams.postid );
        $http.get('http://localhost/_learn/wprest/wp-json/wp/v2/posts/' + $routeParams.postid ).then( function(responseContent ){
            $scope.post = responseContent;
            console.log( responseContent );
        });
    });

    // .controller('MainCtrl', function( $scope, $http, $routeParams){
    //     $http.get( 'http://localhost/_learn/wprest/wp-json/wp/v2/posts/' ).then( function( response ){
    //         $scope.posts = response.data;
    //         console.log( response.data );
    //     });
    // });