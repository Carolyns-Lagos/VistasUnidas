var app = angular.module("app1",[])
app.controller("controlador1",function($scope,$http,$sce)
{
    $scope.trustScr = function(src)
    {
        return $sce.trustAsResourceUrl(src);
    }
    var header_config =
    {
        headers:
        {
            'Content-Type' : 'application/json'
        }
    };
    $scope.inicio = function()
    {
        var usuario =
        ({
            correo:$scope.correo,
            nombre:$scope.usuario1, 
            password:$scope.contrasena,
            rut:$scope.ruti,
            telefono:$scope.celular
        });
        console.log(JSON.stringify(usuario));
        $http(
        {
        method :'POST',
        url : $scope.trustScr("http://localhost:8080/usuarios/agregarUsuarioVendedor"),
        data : JSON.stringify(usuario),
        config : header_config
        }).then(function(data)
        {
          console.log(data)
        },function(error)
        {
            console.log(error)
        });        
    }
}); 