(function() {
  'use strict'

  angular.module('app')
    .component('editPost', {
      controller: EditPostController,
      templateUrl: 'posts/editPost.template.html'
    })

  EditPostController.$inject = ['$state', 'ClassifiedService']

  function EditPostController($state, ClassifiedService) {
    const vm = this

    vm.$onInit = function() {
      vm.editPost = {}
      getSinglePost($state.params.id)
    }

    vm.updatePost = updatePost

    function getSinglePost(id) {
      ClassifiedService
        .getPost(id)
        .then(success, fail)

      function success(result) {
        vm.postTitle = result.title
        vm.editPost = result
      }

      function fail(err) {
        console.log(err)
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
  }
})()
