'use strict';

/**
 * @ngdoc service
 * @name angularYoemanLearningApp.proveedores
 * @description
 * # proveedores
 * Factory in the angularYoemanLearningApp.
 */
angular.module('angularYoemanLearningApp')
  .factory('provServ', function ($q, $http, $log) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
		all: function(data){
			var prom = $q.defer();
			
			$http({
				method: 'GET',
				url: 'http://localhost:9001/proveedores?v=1' + new Date()
			}).then(function(res){
				$log.log("GET /proveedores: ", res.data);
				prom.resolve(res.data);
			}, function(err){
				prom.reject(err);
			});
			
			return prom.promise;
		},
		create: function(datos){
			var prom = $q.defer();
			
			$http({
				method: 'POST',
				data: datos,
				url: 'http://localhost:9001/proveedores?v=1' + new Date()
			}).then(function(res){
				$log.log("POST /proveedores: ", res.data);
				prom.resolve(res.data);
			}, function(err){
				prom.reject(err);
			});
			
			return prom.promise;
		},
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
