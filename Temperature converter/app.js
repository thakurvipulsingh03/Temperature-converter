document.getElementById('convert').onclick = tempconvert;
document.getElementById('clear').onclick = clearForm;

function tempconvert() {

    var celsius = document.getElementById("celsius").value;
    var fahrenheit = document.getElementById("fahrenheit").value;

    if(celsius != '') {
        fahrenheit = (parseFloat(celsius) *1.8) +32;
    } else{
        celsius = (parseFloat(fahrenheit) -32) /1.8;
    }

    document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);

}

function clearForm() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
}