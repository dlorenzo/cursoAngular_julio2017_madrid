var catalogoComponent = require('./catalogo.component');
var catalogoNuevoComponent = require('./nuevo/nuevo.component');
var catalogoListaDirective = require('./lista/lista.component');

var catalogo = angular.module('ejemplo.catalogo',[]);

catalogo.component('catalogo',catalogoComponent.default);
catalogo.component('catalogoNuevo',catalogoNuevoComponent.default);
catalogo.directive('catalogoLista',catalogoListaDirective.default);
catalogo.directive('validador',function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, mCtrl) {
      function validacion(valor) {
        if (valor > 0) {
          mCtrl.$setValidity('charE', true);
        } else {
          mCtrl.$setValidity('charE', false);
        }
        return valor;
      }
      mCtrl.$parsers.push(validacion);
    }
  };
});

catalogo.controller('catalogoCtrl', function ($scope) {
    $scope.busqueda = {
        value: ""
    }

    this.callback = function() {
        console.log($scope.busqueda.value);
    }
});

export default catalogo.name;