let ProfileService = function($firebaseArray){

	this.getProfile = getProfile;
	this.addProfile = addProfile;
	this.editProfile = editProfile;

	function getProfile(user){
		let ref = firebase.database().ref('users/' + user.uid);

		let array = $firebaseArray(ref);

		return array;

	}

	function addProfile(obj) {
		var user = firebase.auth().currentUser;

		
		let ref = firebase.database().ref('users/' + user.uid);

		let array = $firebaseArray(ref);

			array.$add({
			email: user.email,
			id: user.uid,
			fName: obj.fName,
			lName: obj.lName,
			// address: obj.address,
			// city: obj.city,
			// state: obj.state,
			// zip: obj.zip,
			// country: obj.country,
			// about: obj.about,
		});


	}


	function editProfile(obj){
		var user = firebase.auth().currentUser;
		
		let ref = firebase.database().ref('users/' + user.uid );
		
		let array = $firebaseArray(ref);
		let id = user.uid;
		let email = user.email;
		


		//Edit a particular record under the user $id
		setTimeout(function(){
		
		let item = array.$getRecord(obj.$id);
		console.log(item);
		item.fName = obj.fName;
		item.lName = obj.lName;
		array.$save(item).then(function() {
			// $state.go('root.dash');
		});
		}, 500);
		
		//TEST

		// array.$save({
		// 	email: email,
		// 	id: id,
		// 	fName: obj.fName,
		// 	lName: obj.lName,
		// 	// address: obj.address,
		// 	// city: obj.city,
		// 	// state: obj.state,
		// 	// zip: obj.zip,
		// 	// country: obj.country,
		// 	// about: obj.about,
		// });

		


	}
};

ProfileService.$inject = ['$firebaseArray'];

export default ProfileService;