let EditProfileCtrl = function(ProfileService){

	let vm = this;
	vm.addProfile = addProfile;
	vm.editProfile = editProfile;

	let currentUser;

	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			currentUser = ProfileService.getProfile(user);
			console.log(currentUser);
			vm.data = currentUser;
		

		} else {
			console.log('no user');
			vm.noUser = true;

		}
	})
	function addProfile(user){
		ProfileService.addProfile(user, currentUser)
	}

	function editProfile(user){
		
		ProfileService.editProfile(user);
	}

};

EditProfileCtrl.$inject = ['ProfileService'];

export default EditProfileCtrl