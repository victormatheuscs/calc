



function calcular() {
    
    var resultado = document.getElementById('resultado').innerHTML;
    
    if(resultado) {
        o = eval(resultado);
        document.getElementById('resultado').innerHTML = o;
    } else {
        document.getElementById('resultado').innerHTML = "Nada para calcular";
    }
}
