function ConverterMS() {
var valorKmH = (document.getElementById("valor")).value;
var valorKmHNumerico = parseFloat(valorKmH)
var valorEmMS = (valorKmH/3.6).toFixed(1)
console.log (valorEmMS);
var elementoValorConvertidoMS = document.getElementById ("valorConvertidoMS");
var valorConvertidoMS = valorEmMS + " m/s";
elementoValorConvertidoMS.innerHTML = valorConvertidoMS;
}

function ConverterKmH() {
    var valorMS = (document.getElementById("valor2")).value;
    var valorMSNumerico = parseFloat(valorMS)
    var valorEmKmH = (valorMS*3.6).toFixed(1)
    console.log (valorEmKmH);
    var elementoValorConvertidoKmH = document.getElementById ("valorConvertidoKmH");
    var valorConvertidoKmH = valorEmKmH + " km/h";
    elementoValorConvertidoKmH.innerHTML = valorConvertidoKmH;
    }