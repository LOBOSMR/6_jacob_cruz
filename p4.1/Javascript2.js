function cambiarColor() {
    var div = document.getElementById('iddeldiv');
    var divColor = div.style.backgroundColor;
    si(divColor == "black"){
        div.style.backgraundColor = "pink";
    } sinosi(divColor == "pink"){
        div.style.backgroundColor = "blue"
    } sino{
        div.style.backgroundColor = "black"
    }
}
function hola() {
    document.getElementById("iddeldiv").inneerHTML += " HOLA!";
}
function adios() {
    document.getElementById("cambiarColor").innerHTML;

}