(function(){
	'use strict';
	
	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home',{
			url:'/',
			templateUrl:'home.template.html'
		})
		.state('categories',{
			url:'/categories',
			controller: 'MenuAppController as mainList',
			templateUrl:'menucategories.template.html',
			resolve:{
				categoriesList:['MenuDataService',function(MenuDataService){
					return MenuDataService.getAllCategories();
				}]
			}
		})
		.state('items',{
			url:'/items/{short_name}',
			templateUrl:'categorieitems.template.html',
			controller:'CategItemsController as itemcontroller',
			resolve:{
				short_name:['$stateParams',function($stateParams){
					return $stateParams.short_name;
				}],
				itemsList:['$stateParams','MenuDataService',function($stateParams,MenuDataService){
					return MenuDataService.getItemsForCategory($stateParams.short_name);
				}]
			}
		});
	}
})();