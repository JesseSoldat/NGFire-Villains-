let config = function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('root', {
			abstract: true,
			controller: 'LoginCtrl as vm',
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
		.state('root.villains', {
			url: '/villains',
			controller: 'VillainsCtrl as vm',
			templateUrl: 'templates/app-villains/villains.html'
		})
		.state('root.addVillain', {
			url: '/addvillain',
			controller: 'AddVillainCtrl as vm',
			templateUrl: 'templates/app-villains/add-villain.html'
		})
		.state('root.profile', {
			url: '/profile',
			controller: 'ProfileCtrl as vm',
			templateUrl: 'templates/app-profile/profile.html'
		})
		.state('root.editProfile', {
			url: '/editprofile',
			controller: 'EditProfileCtrl as vm',
			templateUrl: 'templates/app-profile/edit-profile.html'
		})
		.state('root.photos', {
			url: '/photos',
			controller: 'PhotosCtrl as vm',
			templateUrl: 'templates/app-profile/photos.html'
		})
		;

};
config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;