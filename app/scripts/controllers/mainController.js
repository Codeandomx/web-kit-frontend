/*************************************
Controlador principal de la app
*************************************/

(function (){
	'use strict';

	function mainController ($scope)
	{
		var vm = this;

		vm.msg = 'Hello World!!!';
	}

	angular
		.module('app')
			.controller('mainController', ['$scope', mainController]);
})();