/// <reference path="../../typings/angularjs/angular.d.ts"/>
'use strict';
var appDependencies = [
    'ionic',
    'ui.router',
    'partials',
    'review',
    'reviews',
    'dashboard',
    'tabs',
    'venues',
    'settings'
];

var GreatDate = {
    App: angular.module('GreatDate', appDependencies),
    Dashboard: angular.module('dashboard', []),
    Review: angular.module('review', []),
    Reviews: angular.module('reviews', []),
    Settings: angular.module('settings', []),
    Tabs: angular.module('tabs', []),
    Venues: angular.module('venues', [])
};


function defaultStateProvider($stateProvider, $urlRouterProvider) {

    console.log('default?');
    var greatDate = {
        url: '/',
        templateUrl: 'dist/app.html'
    };

    $stateProvider
        .state('greatDate', greatDate)
}

function run($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
    });
}

GreatDate
    .App
    .config(['$stateProvider', '$urlRouterProvider', defaultStateProvider])
    .run(['$ionicPlatform', run])

window.GreatDate = GreatDate;
