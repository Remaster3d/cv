var message = prompt("Your message here ");
var text = message.length;
// var calculation = Math.floor(180 - text);
var cutMessage = message.slice(0,180);
prompt("You have written " + text + " characters," + " you have -" + calculation +" characthers left.");
