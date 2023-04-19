function my_Dictionary() {
    var Animal= {
        Species: "Dog",
        Color: "Black",
        Breed: "French Waterdog",
        Age: 6,
        Sound: "Bark!",
    };
    delete Animal.Color;
    document.getElementById("Dictionary").innerHTML= Animal.Color;
}