(function() {
  'use strict'

  angular.module('app')
  .service('ClassifiedService', ClassifiedService)

  ClassifiedService.$inject = ['$http', '$q']

  function ClassifiedService($http, $q) {




    this.getAllPosts =function() {
      return $http.get('api/classifieds/').then(success, failure)

      function success(response) {
        return response.data
      }

      function failure(err) {
        return $q.reject(err)
      }
    }

    this.getPost = function(id) {
      return $http.get(`api/classifieds/${id}`).then(success, failure)

      function success(response) {
        return response.data
      }

      function failure(err) {
        return $q.reject(err)
      }
    }

    this.create = function(post) {
      return $http.post('api/classifieds/',post).then(success, failure)

      function success(response) {
        return response.data
      }

      function failure(err) {
        return $q.reject(err)
      }
    }

    this.update= function(post) {
      return $http.patch(`api/classifieds/${post.id}/`, post).then(success, failure)

      function success(response) {
        return response.data
      }

      function failure(err) {
        return $q.reject(err)
      }
    }

    this.remove= function(id) {
      return $http.delete(`api/classifieds/${id}`).then(success, failure)

      function success(response) {
        return response.data
      }

      function failure(err) {
        return $q.reject(err)
      }
    }
  }
})()
