let ProfileCtrl = function($state){
	let vm = this;

	vm.editProfile = editProfile;

	function editProfile(){
		$state.go('root.editProfile');
	}
};

ProfileCtrl.$inject = ['$state'];

export default ProfileCtrl;