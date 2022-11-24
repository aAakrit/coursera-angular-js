(function (){
	'use strict';

	angular.module('public')
	.controller('RegistrationController', RegistrationController);

	RegistrationController.$inject = ['$rootScope','MenuService']; 

	function RegistrationController($rootScope,MenuService) {
		var reg = this;

	  reg.submit = function (firstname,lastname,email,phone,itemshortname) {
		$rootScope.firstname = "";
		$rootScope.lastname = "";
		$rootScope.email = "";
		$rootScope.phone = "";
		$rootScope.itemshortname = "";
		$rootScope.registered = false;
		var item = null; 

		MenuService.getItem(itemshortname).then(function(response){
			item = response;
			$rootScope.firstname = firstname;
			$rootScope.lastname = lastname;
			$rootScope.email = email;
			$rootScope.phone = phone;
			$rootScope.item = item;
			$rootScope.registered = true;
			reg.registered = true;
			reg.message = "Your information has been saved.";
		},function(response){
			$rootScope.registered = false;
			reg.registered = false;
			reg.message = "No such menu number exists";
		});
	  };
	}
})();