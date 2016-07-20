let EditProfileCtrl = function(){

	let vm = this;
	vm.editProfile = editProfile;

	function editProfile(user){
		console.log(user);
	}

};

EditProfileCtrl.$inject = [];

export default EditProfileCtrl