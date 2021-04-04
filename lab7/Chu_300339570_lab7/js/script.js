function AddValue(){
    // get the operands value
    var operand1 = document.getElementById("inp1").value;
    var operand2 = document.getElementById("inp2").value;

    // parse to integer
    val1 = parseFloat(operand1, 10);
    val2 = parseFloat(operand2, 10);

    // perform operation
    var result = val1 + val2;
    document.getElementById("result").value = operand1 + " + " + operand2 + " = " + result;
}

function TimesValue(){
    // get the operands value
    var operand1 = document.getElementById("inp1").value;
    var operand2 = document.getElementById("inp2").value;

    // parse to integer
    val1 = parseFloat(operand1, 10);
    val2 = parseFloat(operand2, 10);

    // perform operation
    var result = val1 * val2;
    document.getElementById("result").value = operand1 + " x " + operand2 + " = " + result;
}

function DivideValue(){
    // get the operands value
    var operand1 = document.getElementById("inp1").value;
    var operand2 = document.getElementById("inp2").value;

    // parse to integer
    val1 = parseFloat(operand1, 10);
    val2 = parseFloat(operand2, 10);

    // perform operation
    var result = val1 / val2;
    document.getElementById("result").value = operand1 + " : " + operand2 + " = " + result;
}


function ClearValue(){
    // clear the value
    document.getElementById("inp1").value = null;
    document.getElementById("inp2").value = null;
    document.getElementById("result").value = null;
}