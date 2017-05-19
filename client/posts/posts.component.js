(function() {
  'use strict'

  angular.module('app')
  .component('posts', {
    controller: controller,
    templateUrl: 'posts/posts.template.html'
  })

  class ClassName {
    constructor() {

    }
  }controller.$inject = ['ClassifiedService', '$state']

  function controller(ClassifiedService, $state) {
    const vm = this
    vm.sortBy = 'title'

    vm.$onInit = function() {
      vm.posts = []
      getAllPosts()
    }

    function getAllPosts() {
      ClassifiedService
        .getAllPosts()
        .then(success, fail)

      function success(result) {
        vm.posts = result
      }

      function fail() {
        console.log("oops! there was an error")
      }
    }

    vm.createPost = function(post) {
      ClassifiedService
        .create(post)
        .then(success, fail)

      function success(result) {
        vm.posts.push(result)
        vm.isNewPostVisible = !vm.isNewPostVisible
        delete vm.post
        vm.newPostForm.$setUntouched()
      }

      function fail() {
        console.log("oops! there was an error")
      }
    }

    function updatePost(post) {
      ClassifiedService
        .update(post)
        .then(success, fail)

      function success(result) {
        $state.go('posts')
      }

      function fail(err) {
        console.log(err)
      }
    }

    // look at pirates
    vm.deletePost= function(id) {
      ClassifiedService
        .remove(id)
        .then(success, fail)

      function success(result) {
        vm.posts.splice(vm.posts.indexOf(result), 1)
      }

      function fail() {
        console.log("oops! there was an error")
      }
    }
  }


})();
