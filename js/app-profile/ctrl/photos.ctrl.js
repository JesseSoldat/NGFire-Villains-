let PhotosCtrl = function(ProfileService, $scope){
	let vm = this;

	    	
	let user = firebase.auth().currentUser; 

	

	//Storage
	var storage = firebase.storage();

	var storageRef = storage.ref();

	//Array for storing file names and URLs
	let fileArray = [];
	let urlArray = [];

	// Create an Array of files URLs to download from the Database img section
	vm.photos = ProfileService.getPhotos();

	checkData();

	function checkData(){
		if(vm.photos.length > 0){
			for(let i = 0; i < vm.photos.length; i++){
				fileArray.push(vm.photos[i].name);	
			}
			buildUrlArray();
		} else {
			setTimeout(function(){
				checkData();
			},300);
		}
	}

	function buildUrlArray(){
		console.log(user);
		console.log(fileArray);
		for(let i = 0; i < fileArray.length; i++){
			storageRef.child(user.uid + '/' + fileArray[i]).getDownloadURL().then(function(url){
				urlArray.push(url);
				$scope.$apply(function(){
					vm.url = urlArray;
				})
			})
		}
	}
	
};
PhotosCtrl.$inject = ['ProfileService', '$scope'];
export default PhotosCtrl;