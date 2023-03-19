function Add() {
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    result = parseInt(n1)+parseInt(n2);
    document.getElementById("result").value = "The sum of "+n1+" and "+n2+" is "+result;
}

function Sub() {
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    result = parseInt(n1)-parseInt(n2);
    document.getElementById("result").value = "The difference of "+n1+" and "+n2+" is "+result;
}

function Multi() {
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    result = parseInt(n1)*parseInt(n2);
    document.getElementById("result").value = "The product of "+n1+" and "+n2+" is "+result;
}

function Div() {
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    result = parseInt(n1)/parseInt(n2);
    document.getElementById("result").value = "The quotient of "+n1+" and "+n2+" is "+result;
}

function Rem() {
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    result = parseInt(n1)%parseInt(n2);
    document.getElementById("result").value = "The remainder of "+n1+" and "+n2+" is "+result;
}