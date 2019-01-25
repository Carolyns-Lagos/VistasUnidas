var app = angular.module('Login',[]); // Estandar para comenzar angular
//verificar usuario por rut y clave
/*formacliente(rut)
{
    rut.value=rut.value.replace(/[.-]/g,'').replace(/^(\d{1,2})(d\{3})(d\3)(\w{1})$/,'$1.$2.$3-$4')
}*/
app.controller('IngresoDatos'.function ($scope, $http) {
    $scope.guardar = function () {
        var usuario = {
            'rut' :$scope.ruti,
            'password' :$scope.pass
        };
    
});
function validar() {
    var rut=document.getElementById("RUT").value;
    var clave=document.getElementById("pwd").value;
    if(rut === "" || clave === "")
    {
        alert('todos los campos son obligatorios');
        return false
    }
    if (isNaN(rut))
    {
        alert('rut invalido')
        return false
    }
    if (rut === "123456789" && clave === "123456")
    {
        alert("sesion iniciada");    
    }
    else
    {
        alert("rut y contraseña invalidos");
        return false;
    }
}

app.controller('ctrlLogin', function($scope,$window,$location,$http)
{    
    
    $scope.mostrarLogin = true;
    $scope.mostrarError = false;
    $scope.mensaje = "";
    $scope.modelPass="";
    $scope.modelRut="";



    $scope.iniciarSesion = function(){

        
        if($scope.modelRut=="" || $scope.modelPass==""){
            $scope.mostrarError=true;
            $scope.mensaje = "Ingrese datos";
            
        }
        else{
            var user=({ rutCliente:$scope.modelRut, password:$scope.modelPass });
            $http({
                method:'POST', 
                url:"http://localhost:8080/clientes/login",
                data:user})
                .then(function(respuesta){
                if(respuesta.data){
                    window.location.href="/vistacl.html"
                }
                else{
                    $scope.mostrarError=true;
                    $scope.mensaje="Rut o clave incorrectos";          
                }      
            })
        
        }
    };
});