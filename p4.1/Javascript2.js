function cambiarColor() {
    var div = document.getElementById('iddeldiv');
    var divColor = div.style.backgroundColor;

    if (divColor == "black") {
        div.style.backgroundColor = "pink";
    } else if (divColor == "pink") {
        div.style.backgroundColor = "blue";
    } else {
        div.style.backgroundColor = "black";
    }
}

function adios() {
    document.getElementById("iddeldiv").innerHTML += " ADIOS!";
}

function hola() {
    document.getElementById("iddeldiv").innerHTML += " HOLA!";
}