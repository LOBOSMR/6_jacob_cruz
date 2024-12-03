function calcularNotaFinal() {
    //recuperamos los valores introducidos por el usuario para las notas de primera evaluaciÃģn y segunda evaluaciÃģn
    var notaPrimeraEv = document.getElementById("nota_primera_ev").value;
    console.log("Nota primer input;" + notaPrimeraEv);

    var notaSegundaEv = document.getElementById("nota_segunda_ev").value;
    console.log("Nota segundo input;" + notaSegundaEv);

    var divResultado = document.getElementById("resultado");
    //en la variable notaFinal guardamos (notaPrimeraEv + notaSegundaEv) / 2
    var notaFinal = (parseInt(notaPrimeraEv) + parseInt(notaSegundaEv)) / 2;

    var nombre = document.getElementById("nombre").value;

    var notaFinal = calcularMedia(notaPrimeraEv, notaSegundaEv);
    console.log("Nota media: " + notaFinal)
    if (notaFinal >= 5) {
        divResultado.style.backgroundColor = "green";
        divResultado.innerHTML = "Aprobado !!!"
        //TODO: recuperar por id el elemento resultado, y asignar a su propiedad innerHTML el texto "APROBADO :)"
        //TODO: recuperar por id el elemento resultado y asignar a su propiedad style.backgroundColor el color "green"
    } else {
        //TODO: recuperar por id el elemento resultado, y asignar a su propiedad innerHTML el texto "VUELVE A INTENTARLO :("
        //TODO: recuperar por id el elemento resultado y asignar a su propiedad style.backgroundColor el color "red"
        divResultado.style.backgroundColor = "red";
        divResultado.innerHTML = "Has suspendido, " + nombre + ". tu nota es " + notaFinal;
    }
}

function calcularMedia(valor1, valor2) {
    return (parseInt(valor1) + parseInt(valor2)) / 2;
}