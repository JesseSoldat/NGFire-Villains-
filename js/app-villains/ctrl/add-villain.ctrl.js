let AddVillainCtrl = function(VillainService, $state){
	let vm = this;
	this.addVillain = addVillain;

	//Check for logged in user
	firebase.auth().onAuthStateChanged(function(user){
		if(user){

		} else {
			$state.go('root.login');
		}
	});

	function addVillain(char){
		VillainService.addVillain(char);
		$state.go('root.villains');
	}
};
AddVillainCtrl.$inject = ['VillainService', '$state'];

export default AddVillainCtrl;