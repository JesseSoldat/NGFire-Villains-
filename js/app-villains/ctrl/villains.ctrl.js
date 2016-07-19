let VillainsCtrl = function(VillainService){
	let vm = this;

	let villainsArray = VillainService.getVillains();
	// console.log(villainsArray);

	vm.villains = villainsArray;
};
VillainsCtrl.$inject = ['VillainService'];

export default VillainsCtrl;