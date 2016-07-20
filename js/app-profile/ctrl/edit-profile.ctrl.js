let EditProfileCtrl = function(ProfileService, $state){

	let vm = this;
	vm.addProfile = addProfile;
	vm.editProfile = editProfile;

	let currentUser;

	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			currentUser = ProfileService.getProfile(user);
			
			vm.data = currentUser;
		

		} else {
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

EditProfileCtrl.$inject = ['ProfileService', '$state'];

export default EditProfileCtrl