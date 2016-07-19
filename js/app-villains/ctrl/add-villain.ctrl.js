let AddVillainCtrl = function(VillainService, $state){
	let vm = this;
	this.addVillain = addVillain;

	function addVillain(char){
		VillainService.addVillain(char);
		$state.go('root.villains');
	}
};
AddVillainCtrl.$inject = ['VillainService', '$state'];

export default AddVillainCtrl;