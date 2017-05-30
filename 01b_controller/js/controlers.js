angular.module("miApp")
.controller("MainController", ["$scope", function ($scope) {
    $scope.titulo = "Pensamientos"
    $scope.nombre = 'Pepe'; 
    $scope.nuevoPensamiento = ''; // declaracion innecesaria pero recomendable
    $scope.aPensamientos = [];

    $scope.botonAdd = function () {
        $scope.aPensamientos.push($scope.nuevoPensamiento); 
        $scope.nuevoPensamiento = '';
    }
}]) // fin de Maincontroller
