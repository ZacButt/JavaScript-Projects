var Instruments= ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content="";
var Y;
function for_Loop() {
    for (Y= 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML= Content;
}

function array_Function() {
    var array_cars = [];
    array_cars[1]= "Porsche";
    array_cars[2]= "Nissan";
    array_cars[3]= "Ford";
    document.getElementById("Array").innerHTML = "In this picture, the car is a " + array_cars[1] + ".";
}

function constant_function() {
    const Musical_Instrument= {type:"guitar", brand: "Fender", color: "black"};
    Musical_Instrument.color="pink";
    Musical_Instrument.price="$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var X = 82;
document.write(X);
{
    let X = 33
    document.write("<br>"+X);
}
document.write("<br>"+X)

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML= car.description();
