(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath','$rootScope'];
function MenuService($http, ApiPath,$rootScope) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getItem = function (itemshortname){
    return $http({method: "GET",url: ("https://let369-module5.herokuapp.com/menu_items/"+ itemshortname +".json")})
    .then(function (response) {
      return response.data;
    });
  }
}



})();
