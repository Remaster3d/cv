var message = prompt("Hello, what is your name? ");


var cutMessage = message.slice(0,1); 
var firstCharSlice = cutMessage.toUpperCase();
var remainOfMessage = message.slice(1, message.length);
remainOfMessage = remainOfMessage.toLowerCase();
var capitelizedName =  firstCharSlice + remainOfMessage;



prompt("You have written " + capitelizedName);