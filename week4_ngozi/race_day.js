let raceNumber = Math.floor(Math.random()*1000);
let earlyReg = true;
let runnerAge = 17;
if (earlyReg===false){
  raceNumber += 1000;
}
if(runnerAge>18 && earlyReg===true){
  console.log(`your race time is 9:30am and your race number is ${raceNumber}`);
}
else if(runnerAge>18 || earlyReg===true){
  console.log(`your race time is 11:00am and your race number is ${raceNumber}`);
}
else if(runnerAge<18 && earlyReg===!true){
  console.log(`your race time is 12:30pm and your race number is ${raceNumber}`);
}
else if(runnerAge>=18 && earlyReg===true){
  console.log(`your race time is 1:00am and your race number is ${raceNumber}`);
}
else{
  console.log('see the registration desk');
}
