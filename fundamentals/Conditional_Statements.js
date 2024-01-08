const title = `Conditional Statements in JavaScript`;
console.log(title);

const readlineSync = require("readline-sync");

$userAge = readlineSync.question("What is your age ? :");
$userAge = Number($userAge);
if ($userAge >= 18 && $userAge <= 60) {
  // checking the initial condition
  console.log("You are an adult. You are permitted to watch this movie.");
}else{
    if($userAge > 60){
        console.log(`Viewer's descretion is advised as these content might be ahead of your time`)
    }
     else {
      // handling the failing condition
      console.log(`You are not an adult yet!! Try after ${18 - $userAge} years.`);
    }
}

