
function insert(num) {
    var display = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = display + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    display = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = display.substring(0, display.length -1);
}

function calcular() {
    
    var resultado = document.getElementById('resultado').innerHTML;
    
    if(resultado) {
        o = eval(resultado);
        document.getElementById('resultado').innerHTML = o;
    } else {
        document.getElementById('resultado').innerHTML = "Nada para calcular";
    }
}