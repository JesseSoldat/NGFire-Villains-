let LoginService = function($state){

	this.register = register;
	this.login = login;
	
	function register(user){
		firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error){
		var errorCode = error.code;
		var errorMessage = error.message;
			console.log(errorMessage);
		});
		// login(user);
	}

	
	function login(user){
		firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error){
		console.log(error.code, error.message);
		});
		
	
	}

};

LoginService.$inject = ['$state'];

export default LoginService;