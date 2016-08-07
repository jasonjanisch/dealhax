angular
  .module('deals')
  .factory('Deals', ['$http', function($http) {
    return {
      get: function get() {
        return $http.get('http://www.cheapshark.com/api/1.0/deals');
      }
    }
  }]);
