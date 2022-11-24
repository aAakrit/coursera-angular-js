(function(){
	'use strict';
	
	angular.module('MenuApp')
	.controller('CategItemsController',CategItemsController);

	CategItemsController.$inject = ['itemsList','short_name']
	function CategItemsController(itemsList,short_name){
		var itemcontroller = this;
  		itemcontroller.itemsList = itemsList;
  		itemcontroller.cn = short_name;
	}
})();