angular.module('app').controller("MainController", function(){
	var vm = this;
	vm.title = 'Choices';
	vm.options = [
	{
		country: 'The United States',
		sessionCodes: [],
	},
	{
		country: 'Mexico',
		sessionCodes: [],
	},
	{
		country: 'Canada',
		sessionCodes: [],
	},
	{
		country: 'Japan',
		sessionCodes: [],
	},
	{
		country: 'China',
		sessionCodes: [],
	}];
});