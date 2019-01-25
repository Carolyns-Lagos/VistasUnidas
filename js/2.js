function multiplicar() 
    {
        var m1 = document.getElementById('cantidad1').innerHTML;
        var m2 = document.getElementById('valor1').innerHTML;
        var total = 0;
        total = parseInt(m1)*parseInt(m2);
        document.getElementById('total1').innerHTML=total;
    }