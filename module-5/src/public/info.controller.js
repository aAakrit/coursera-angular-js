(function (){
	'use strict';

	angular.module('public')
	.controller('InfoController', InfoController);

	InfoController.$inject = ['$rootScope']; 
	function InfoController($rootScope){
		var ctrl = this;
		ctrl.registered = $rootScope.registered;
		if(ctrl.registered){
		ctrl.fname = $rootScope.firstname;
		ctrl.lname = $rootScope.lastname;
		ctrl.email = $rootScope.email;
		ctrl.phone = $rootScope.phone;
		var favitem = $rootScope.item;
		ctrl.shortname = favitem.short_name;
		ctrl.name = favitem.name;
		ctrl.description = favitem.description;
		}
	}
})();