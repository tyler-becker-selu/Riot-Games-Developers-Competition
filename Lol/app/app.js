'use strict';

// Declare app level module which depends on views, and components
angular.module('lol', [
    'ui.router',
    'lol.version'
])
    .config(config)
    .controller('MainCtrl', mainCtrl);

function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('lol', {
            url: '',
            abstract: true,
            views: {
                'header@': {
                    controller: 'MainCtrl as mainCtrl',
                    templateUrl: 'header/header.tmpl.html'
                }
            }
        })

        .state('lol.home',{
            url:'/home',
            views:{
                '@':{
                    templateUrl: 'home/home.tmpl.html'
                }
            }
        })

        .state('lol.trends', {
            url:'/trends',
            views:{
                '@':{
                    templateUrl: 'trends/trends.tmpl.html'
                }
            }
        });

    //this will be used later when we are ready to deploy
    //$locationProvider.html5Mode(true).hashPrefix('!');
}

function mainCtrl() {

}
