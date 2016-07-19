let DashCtrl = function($state){
	//Check for logged in user
	firebase.auth().onAuthStateChanged(function(user){
		if(user){

		} else {
			$state.go('root.login');
		}
	});
};
DashCtrl.$inject = ['$state'];

export default DashCtrl;