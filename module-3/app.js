(function () {
	'use strict';
	angular.module('NarrowItDownApp',[])
	.controller('NarrowItDownController',NarrowItDownController)
	.service('MenuSearchService',MenuSearchService)
	.directive('foundItems',foundItemsDirective);

	function foundItemsDirective(){
		var ddo = {
		    templateUrl:'foundItems.html',
		    scope: {
		      items:'<',
		      onRemove: '&'
		    },
		    controller: ShoppingListDirectiveController,
		    controllerAs: 'list',
		    bindToController: true
	  	};
	  	return ddo;
	}

	function ShoppingListDirectiveController() {

	}

	NarrowItDownController.$inject = ["MenuSearchService"];
	function NarrowItDownController(MenuSearchService){
		var con = this;
		con.searchTerm = "";
		con.found = [];

		con.narrow = function(){
			con.found = [];
			MenuSearchService.getMatchedMenuItems(con.searchTerm)
			.then(function (promise) {
				con.found = promise;
				if(con.searchTerm == "" || con.found.length == 0){
					con.found = "No results";
				}
			});
		};

		con.remove = function(index){
			con.found.splice(index,1);
		};
	}

	MenuSearchService.$inject = ['$http'];
	function MenuSearchService($http) {
		this.getMatchedMenuItems = function(searchTerm){
			var foundItems = [];
			return $http({method: "GET",url: ("https://davids-restaurant.herokuapp.com/menu_items.json")})
			.then(function (response) {
	    		for(var i in response.data.menu_items){
	    			if(response.data.menu_items[i].description.indexOf(searchTerm)!= -1){
	    				foundItems.push(response.data.menu_items[i]);
	    			}
	    		}
	    		return foundItems;
	  		});
  		};
	  	
	}
})();