let AddVillainCtrl = function(VillainService){
	let vm = this;
	this.addVillain = addVillain;

	function addVillain(char){
		VillainService.addVillain(char);
	}
};
AddVillainCtrl.$inject = ['VillainService'];

export default AddVillainCtrl;