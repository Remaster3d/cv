var loveScore = Math.random() * 100;

    loveScore =Math.floor(loveScore) + 1;

 if (loveScore > 70){
     alert("Your love score is " + loveScore + " Best score");
 }

     if (loveScore > 30 && loveScore <=70){
         alert("you got a medium score of " + loveScore + " %");
     }
if (loveScore <=30){         
     alert("Your love score is " + loveScore + " low score");
 }
