// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','pascalprecht.translate', 'ngCordova'])

.run(function($ionicPlatform, $translate, $cordovaGlobalization) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    $cordovaGlobalization.getPreferredLanguage().then(
      function (result) {
          var language = result.value.split("-")[0]
          $translate.use(language).then (function (data) {
            console.log('success: ' + data);
          }, function (error){
            console.log('error: ' + error);
          });
      });
  });
})

.config(function ($translateProvider){
    $translateProvider.useStaticFilesLoader({
      prefix: 'langs/lang-',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');  
    $translateProvider.fallbackLanguage('en');
})


.controller('langsCtrl', ['$scope','$ionicPopover', '$translate',
  function($scope,$ionicPopover, $translate){

  $ionicPopover.fromTemplateUrl('sellangs.html', {scope: $scope})
    .then(function(popover) {
      $scope.popover = popover;
  });  


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };

  $scope.changeLanguage = function (lang) {
    $translate.use(lang);
    $scope.popover.hide();
  }

}])

