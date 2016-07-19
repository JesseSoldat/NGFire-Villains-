let VillainService = function($firebaseArray){

	let ref = firebase.database().ref('villains');

	let array = $firebaseArray(ref);

	this.addVillain = addVillain;

	function addVillain(char){
		array.$add({
			name: char.name,
			url: char.url
		});
	}
};

VillainService.$inject = ['$firebaseArray'];

export default VillainService;