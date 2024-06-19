function calculate(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let lblOutput = document.getElementById("output");
    let operator = document.getElementById("operator").value;

    let num1 = parseInt(number1);
    let num2 = parseInt(number2);

    lblOutput.style = "color: rgb(8, 47, 155);";

    switch(operator){
        case "+" : lblOutput.innerHTML = num1 + num2; break;
        case "-" : lblOutput.innerHTML = num1 - num2; break;
        case "*" : lblOutput.innerHTML = num1 * num2; break;
        case "/" : lblOutput.innerHTML = num1 / num2; break;
        default :
            lblOutput.innerHTML = "Wrong Operator!";
            lblOutput.style = "color: red;";
    }
    
}

function reset(){
    let txtNum1 = document.getElementById("number1");
    let txtNum2 = document.getElementById("number2");
    let operator = document.getElementById("operator");
    document.getElementById("output").innerHTML = "";

    txtNum1.value = "";
    txtNum1.placeholder = "First Number";

    txtNum2.value = "";
    txtNum2.placeholder = "Second Number";

    operator.value = "";
    operator.placeholder = "Operator";
}

function addOperation(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    let lblOutput = document.getElementById("output");

    let num1 = new Number(number1);
    let num2 = new Number(number2);

    lblOutput.innerHTML = num1 + num2;

}
function subOperation(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    let lblOutput = document.getElementById("output");

    let num1 = new Number(number1);
    let num2 = new Number(number2);

    lblOutput.innerHTML = num1 - num2;

}
function mulOperation(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    let lblOutput = document.getElementById("output");

    let num1 = new Number(number1);
    let num2 = new Number(number2);

    lblOutput.innerHTML = num1 * num2;

}
function devOperation(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    let lblOutput = document.getElementById("output");

    let num1 = new Number(number1);
    let num2 = new Number(number2);

    lblOutput.innerHTML = num1 / num2;

}
