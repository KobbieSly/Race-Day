let raceNumber = Math.floor(Math.random() * 1000);
let earlyregistee = false;
let age =   56;

if(earlyregistee && age>18){
  raceNumber += 1000;
}

if(earlyregistee && age>18){
  console.log(`Participant No. ${raceNumber} will be racing at 9:30 am`);
} else if (!earlyregistee && age>18){
  console.log(`Participant No. ${raceNumber} will be racing at 11:00 am`);
} else if(age < 18){
  console.log(`Participant No. ${raceNumber} will be racing at 12:30 pm`);
} else {
  console.log(`18yr old participants should go see the registration  desk`);
}