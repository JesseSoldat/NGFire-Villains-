import angular from 'angular';

import AddVillainCtrl from './ctrl/add-villain.ctrl';


import VillainService from './services/villain.service';


angular
	.module('app.villains', [])

	.controller('AddVillainCtrl', AddVillainCtrl)

	.service('VillainService', VillainService)

;