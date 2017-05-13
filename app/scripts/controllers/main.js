'use strict';

/**
 * @ngdoc function
 * @name wprestNgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wprestNgApp
 */
angular.module('wprestNgApp')
  // .controller('MainCtrl', function () {
  //   this.awesomeThings = [
  //     'HTML5 Boilerplate',
  //     'AngularJS',
  //     'Karma'
  //   ];
  // });
  .controller('MainCtrl', function( $scope, $http, $routeParams){
        $http.get( 'http://localhost/_learn/wprest/wp-json/wp/v2/posts/' ).then( function( response ){
            $scope.posts = response.data;
            console.log( response.data );
        });
    });
