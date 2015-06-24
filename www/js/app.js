// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('GreatDate', ['ionic', 'GreatDate.controllers'])

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

     if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('greatDate', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'GreatDateController'
  })

  .state('greatDate.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('greatDate.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })
    .state('greatDate.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsController'
        }
      }
    })

  .state('greatDate.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistController'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
