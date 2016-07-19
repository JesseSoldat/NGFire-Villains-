import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import DashCtrl from './ctrl/dash.ctrl';


angular
	.module('app.core', ['ui.router'])
	.config(config)

	.controller('DashCtrl', DashCtrl)
;