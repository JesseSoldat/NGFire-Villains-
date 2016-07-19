let LoginCtrl = function(LoginService, $state){
	let vm = this;

	this.register = register;
	this.login = login;
	this.logout = logout;

	//Check for logged in user
	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			$state.go('root.dash');
		} else {
	
		}
	});

	function register(user){
		LoginService.register(user);
	}

	function login(user){
		LoginService.login(user);
	}

	function logout(){
		firebase.auth().signOut().then(function(){
			$state.go('root.login');
		}, function(error){
			console.log(error);
		});
	}

};
LoginCtrl.$inject = ['LoginService', '$state'];

export default LoginCtrl;