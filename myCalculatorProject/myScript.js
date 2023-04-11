function displayValue(value) {
    document.getElementById("display").value += value;
}

function clearValue() {
    document.getElementById("display").value = "";
}

function summation() {
    var expression = document.getElementById("display").value;
    var display = eval(expression);
    document.getElementById("display").value = display;
}