let LoginService = function(){

	this.register = register;
	this.login = login;
	
	function register(user){
		firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error){
		var errorCode = error.code;
		var errorMessage = error.message;
			console.log(errorMessage);
		});
	}

	

	function login(user){

	}

};

LoginService.$inject = [];

export default LoginService;