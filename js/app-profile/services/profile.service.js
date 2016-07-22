let ProfileService = function($firebaseArray, $state, $rootScope){

	this.getProfile = getProfile;
	this.addProfile = addProfile;
	this.editProfile = editProfile;
	this.fileUpload = fileUpload;
	this.getPhotos = getPhotos;

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
			address: obj.address,
			city: obj.city,
			state: obj.state,
			zip: obj.zip,
			country: obj.country,
			about: obj.about,
		});
	}

	function editProfile(obj){
		var user = firebase.auth().currentUser;
		
		let ref = firebase.database().ref('users/' + user.uid );
		
		let array = $firebaseArray(ref);
	
		
		//Edit a particular record under the user $id
		setTimeout(function(){
		
		let item = array.$getRecord(obj.$id);
		console.log(item);
		item.fName = obj.fName;
		item.lName = obj.lName;
		item.address = obj.address;
		item.city = obj.city;
		item.state = obj.state;
		item.zip = obj.zip;
		item.country = obj.country;
		item.about = obj.about;
		array.$save(item).then(function() {
			$state.go('root.profile');
		});
		}, 500);
		
	}

	function fileUpload(file, avatar){
		
		var user = firebase.auth().currentUser;
	

		//If this is a file for the user's avatar
		if(avatar === "avatar") {
		
			let ref = firebase.database().ref('users/' + user.uid+ '/' + avatar);

			let array = $firebaseArray(ref);

			setTimeout(function(){
				//Check to see if the user already has a avatar
				if (array.length > 0) {
				
					//Edit the current avatar
					let item = array.$getRecord(array[0].$id);
					item.name = file.name
					array.$save(item).then(function() {
						// $state.go('root.profile');
					});
		
				} else {
					//Add a users first Avatar
					array.$add({
					name: file.name
					});
				}
			},500);	
		} //if

		if (avatar === "photos") {
			//add a DATABASE RECORD to keep track of users' photos
			let ref = firebase.database().ref('users/' + user.uid+ '/' + avatar);

			let array = $firebaseArray(ref);

			array.$add({
					name: file.name
			});
			//--------------------------


			//upload the photo to STORAGE
			var storageRef = firebase.storage().ref();
			var imgRef = storageRef.child(user.uid + '/' + file.name);
			var uploadTask = imgRef.put(file);
			//--------------------------
			
		} //if
	} //fileUpload

	function getPhotos(){
		

		var user = firebase.auth().currentUser;
	 	// console.log(user);
		let ref = firebase.database().ref('users/' + user.uid + '/photos');

		let array = $firebaseArray(ref);

		return array;

	}
};

ProfileService.$inject = ['$firebaseArray','$state', '$rootScope'];

export default ProfileService;