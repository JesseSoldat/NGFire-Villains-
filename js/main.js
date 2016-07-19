import angular from 'angular';
import firebase from 'firebase';
import angularfire from 'angularfire';
import $ from 'jquery';
import _ from 'underscore';

import  './app-core/index';
import './app-villains/index';

// Initialize Firebase
  var fireConfig = {
    apiKey: "AIzaSyBcIFiCZP7GivCJr3b5JwflgFq_KuOwjwI",
    authDomain: "ngfire-villains.firebaseapp.com",
    databaseURL: "https://ngfire-villains.firebaseio.com",
    storageBucket: "ngfire-villains.appspot.com",
  };
  firebase.initializeApp(fireConfig);


angular
	.module('app', ['app.core', 'app.villains', 'firebase']);
