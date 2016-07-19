let config = function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('root', {
			abstract: true,
			controller: 'DashCtrl as vm',
			templateUrl: 'templates/app-core/layout.html'
		})
		.state('root.login', {
			url: '/login',
			controller: 'LoginCtrl as vm',
			templateUrl: 'templates/app-core/login.html'
		})
		.state('root.dash', {
			url: '/',
			controller: 'DashCtrl as vm',
			templateUrl: 'templates/app-core/dash.html'
		})
		.state('root.addVillain', {
			url: '/addvillain',
			controller: 'AddVillainCtrl as vm',
			templateUrl: 'templates/app-villains/add-villain.html'
		})
		;

};
config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;