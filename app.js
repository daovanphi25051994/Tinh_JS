function plus(num1, num2) {
    return num1 + num2;
}

function minus(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function showResult() {
    let valueNum1 = parseInt(document.getElementById("num1").value);
    let valueNum2 = parseInt(document.getElementById("num2").value);
    let choose = document.getElementById("choose").value;
    switch (choose) {
        case "+" :
            let result1 = plus(valueNum1, valueNum2);
            document.getElementById("result").innerHTML = "result is " + result1;
            break;
        case "-" :
            let result2 = minus(valueNum1, valueNum2);
            document.getElementById("result").innerHTML = "result is " + result2;
            break;
        case "*" :
            let result3 = multiply(valueNum1, valueNum2);
            document.getElementById("result").innerHTML = "result is " + result3;
            break;
        case "/" :
            let result4 = divide(valueNum1, valueNum2);
            document.getElementById("result").innerHTML = "result is " + result4;
            break;
    }
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}