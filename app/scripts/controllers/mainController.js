/*************************************
Controlador principal de la app 
*************************************/

(function (){
	'use strict';

	function MainController ()
	{
		var vm = this;

		vm.msg = 'Hello World!!!';
	}

	angular
		.module('app')
			.controller('mainController', ['$scope', MainController]);
})();