let VillainsCtrl = function(VillainService, $state, $scope){
	let vm = this;

	//Check for logged in user
	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			getVillains();
		} else {
			$state.go('root.login');
		}
	});

	// setTimeout(function(){
	// 	getVillains();

	// },100);

	function getVillains(){
		let villainsArray = VillainService.getVillains();

		vm.villains = villainsArray;	
	}
	
};
VillainsCtrl.$inject = ['VillainService', '$state', '$scope'];

export default VillainsCtrl;