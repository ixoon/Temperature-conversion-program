
const textBox = document.getElementById("textBox");
const toFarenheit = document.getElementById("toFarenheit");
const toCelsius = document.getElementById("toCelsius");
const output = document.getElementById("output");
let temp;

function convert(){
    if(toFarenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        output.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        output.textContent = temp.toFixed(1) + "°C";
    }
    else{
        output.textContent = "Submit a unit!";
    }
}