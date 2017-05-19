(function() {
  'use strict'

  angular.module('app')
    .config(config)
    .run(function($rootScope) {
      $rootScope.$on('$stateChangeError', console.log.bind(console))
    })

  config.$inject = ['$stateProvider', '$locationProvider']

  function config($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true)
    $stateProvider
      .state({
        name: 'posts',
        url: '/',
        component: 'posts'
      })
      .state({
        name: 'post-edit',
        url: '/:id/edit',
        component: 'editPost'
      })
  }
})()
