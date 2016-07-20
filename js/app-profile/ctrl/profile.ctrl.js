let ProfileCtrl = function($state, ProfileService, $scope){
	let vm = this;

	vm.editProfile = editProfile;

	let currentUser;

	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			currentUser = ProfileService.getProfile(user);
			console.log(currentUser);

			vm.data = currentUser;

		} else {
			console.log('no user');
			
		
		}
	})

	function editProfile(){
		$state.go('root.editProfile');
	}
};

ProfileCtrl.$inject = ['$state', 'ProfileService', '$scope'];

export default ProfileCtrl;