'use strict';

/**
 * @ngdoc function
 * @name angularYoemanLearningApp.controller:ProveedoresCtrl
 * @description
 * # ProveedoresCtrl
 * Controller of the angularYoemanLearningApp
 */
angular.module('angularYoemanLearningApp')
  .controller('ProveedoresCtrl', function ($scope, provServ, toastr) {
    $scope.proveedores = [];
	$scope.prov ={};
	
	provServ.all().then(function(res){
		$scope.proveedores = res;
	});

	$scope.altaProv = function(ata) { 
	provServ.create($scope.prov).then(function(res){
		toastr.success("Guardado Exitosamente!","Alta");
		$scope.prov.nombre = '';
	})
	};
	
	this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
