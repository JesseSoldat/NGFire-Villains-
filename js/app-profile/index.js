import angular from 'angular';

import ProfileCtrl from './ctrl/profile.ctrl';

angular
	.module('app.profile', [])

	.controller('ProfileCtrl', ProfileCtrl)

	;