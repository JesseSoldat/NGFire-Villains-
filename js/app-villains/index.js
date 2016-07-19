import angular from 'angular';

import VillainsCtrl from './ctrl/villains.ctrl';
import AddVillainCtrl from './ctrl/add-villain.ctrl';


import VillainService from './services/villain.service';


angular
	.module('app.villains', [])
	//CTRL
	.controller('VillainsCtrl', VillainsCtrl)
	.controller('AddVillainCtrl', AddVillainCtrl)

	.service('VillainService', VillainService)

;