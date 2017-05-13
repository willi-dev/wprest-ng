'use strict';

/**
 * @ngdoc function
 * @name wprestNgApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the wprestNgApp
 */
angular.module('wprestNgApp')
  .controller('PostCtrl', function( $scope, $http, $routeParams){
        $http.get('http://localhost/_learn/wprest/wp-json/wp/v2/posts/' + $routeParams.postid ).then( function(res ){
            $scope.post = res;
            console.log( res );
        });
    });