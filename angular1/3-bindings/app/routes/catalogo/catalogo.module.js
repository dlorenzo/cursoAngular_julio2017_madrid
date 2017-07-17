var catalogoComponent = require('./catalogo.component');
var catalogoNuevoComponent = require('./nuevo/nuevo.component');
var catalogoListaComponent = require('./lista/lista.component');

var catalogo = angular.module('ejemplo.catalogo',[]);

catalogo.component('catalogo',catalogoComponent.default);
catalogo.component('catalogoNuevo',catalogoNuevoComponent.default)
catalogo.directive('catalogoLista',catalogoListaComponent.default);

catalogo.controller('catalogoCtrl', function ($scope) {
    $scope.busqueda = {
        value: ""
    }

    this.callback = function() {
        console.log($scope.busqueda.value);
    }
});

export default catalogo.name;