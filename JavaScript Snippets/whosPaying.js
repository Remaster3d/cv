
function whosPaying(names){
    var names =["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    var people = names.length;
    var randomPlace = Math.floor(Math.random() * people);
    var randomName = names[randomPlace];

    return randomName + " is going to buy lunch today!"
}



// Michael is going to buy lunch today!