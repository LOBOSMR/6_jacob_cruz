function calcularNotaFinal() {

    var notaPrimeraEv = document.getElementById("nota_primera_ev").value;
    console.log("Nota primer input;" + notaPrimeraEv);

    var notaSegundaEv = document.getElementById("nota_segunda_ev").value;
    console.log("Nota segundo input;" + notaSegundaEv);

    var divResultado = document.getElementById("resultado");

    var notaFinal = (parseInt(notaPrimeraEv) + parseInt(notaSegundaEv)) / 2;

    var nombre = document.getElementById("nombre").value;

    var notaFinal = calcularMedia(notaPrimeraEv, notaSegundaEv);
    console.log("Nota media: " + notaFinal)
    if (notaFinal >= 5) {
        divResultado.style.backgroundColor = "green";
        divResultado.innerHTML = "Aprobado !!!"

    } else {

        divResultado.style.backgroundColor = "red";
        divResultado.innerHTML = "Has suspendido, " + nombre + ". tu nota es " + notaFinal;
    }
}

function calcularMedia(valor1, valor2) {
    return (parseInt(valor1) + parseInt(valor2)) / 2;
}