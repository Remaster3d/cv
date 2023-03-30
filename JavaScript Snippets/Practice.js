// var houseKeeper1 = {
//   name: "Mica",
//   age: 26,
//   hasWorkPermit: true,
//   experience: ["cleaning", "Washing", "Vacum"]
  
// }
 function HouseKeeper (name, yearsOfExperience, workPermit, age){
       this.name = name;
       this.yearsOfExperience = yearsOfExperience;
     this.workPermit = workPermit;
     this.age =  age;
  this.clean = function() {
   alert("Cleaning in progress..!");
  }
 }
