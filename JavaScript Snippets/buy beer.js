function getBeer(money, costPerBottle) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  console.log("buy " + calcBottles(money, costPerBottle) + " bottles of beer");  
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
return calcChange(money, costPerBottle);
}
function calcBottles(startingMoney, costPerBottle){
 var numberOfBottles = Math.floor(startingMoney / costPerBottle);
 return numberOfBottles;
}
function calcChange(startingMoney,costPerBottle){
 var change = startingMoney % costPerBottle;
 return change;
}
 
console.log("Hello boss here is your " + getBeer(5, 1.5) + " change.");