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
        return false; 
    }
}