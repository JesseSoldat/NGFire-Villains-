let LoginCtrl = function(LoginService){
	let vm = this;

	this.register = register;
	this.login = login;

	function register(user){
		LoginService.register(user);
	}

	function login(user){
		console.log(user);
	}

};
LoginCtrl.$inject = ['LoginService'];

export default LoginCtrl;