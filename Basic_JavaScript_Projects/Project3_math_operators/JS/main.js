function addition_Function() {
    var addition = 2+5;
    document.getElementById("Math").innerHTML= "2+5= " + addition; //When i click on Solve the addition equation" it gives me the answer to this equation.
}

function subtraction_Function() {
    var subtraction = 10-5;
    document.getElementById("Math2").innerHTML= "10-5= " + subtraction; //When i click on Solve the subtraction equation" it gives me the answer to this equation.
}

function multiplication() {
    var simple_Math = 10*10;
    document.getElementById("Math3").innerHTML= "10*10= " + simple_Math; // When i click on Solve the multiplication equation" it gives me the answer to this equation.
}

function division() {
    var simple_Math = 56/8;
    document.getElementById("Math4").innerHTML= "56/8= " + simple_Math; //When i click on Solve the division equation" it gives me the answer to this equation.
}

function more_Math() {
    var simple_Math = (1+2) * 10 /2-5;
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math; // When i click on Solve the equation" it gives me the answer.
}

function modulus_Operator() {
    var simple_Math = 25/6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 7;
    document.getElementById("Math7").innerHTML = -x;
}

function increment_Operator() {
var X  = 6
X++;
document.getElementById("Math8").innerHTML= "6++= " + X;
}

function decrement_Operator () {
var Y  = 6
Y--;
document.getElementById("Math9").innerHTML= "6--= " + Y;
}

window.alert(Math.random() * 50);