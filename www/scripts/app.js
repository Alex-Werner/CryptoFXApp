'use strict';
var app = angular.module('cryptofxApp',[
	'onsen',
	'ui.router','ngAnimate','ngCookies','ngRoute','ngSanitize','LocalStorageModule',
	'cryptofxApp.controllers','cryptofxApp.services','cryptofxApp.directives'
	]);
app.config(['$stateProvider','$urlRouterProvider','$locationProvider',function($stateProvider,$urlRouterProvider,$locationProvider){
	$stateProvider
	.state('app',{
		url:'/app',
		templateUrl:'views/application.html',
		controller:'applicationCtrl'
	})
	.state('login',{
		url:'/login',
		templateUrl:'views/login.html',
		controller:'loginCtrl'
	});
	$urlRouterProvider.otherwise('/login');
}]);