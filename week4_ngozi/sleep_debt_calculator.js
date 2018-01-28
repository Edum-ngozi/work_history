const getSleepHours = (day) => {

  switch(day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 4;
      break;
    case 'wednesday':
      return 5;
      break;
    case 'thursday':
      return 7;
      break;
    case 'friday':
      return 10;
      break;
    case 'saturday':
      return 12;
      break;
     case 'monday':
      return 15;
      break;
  }
};

const getActualSleepHours = () =>
  getSleepHours('monday');+
  getSleepHours('tuesday');+
  getSleepHours('wednesday');+
  getSleepHours('thursday');+
  getSleepHours('friday');+
  getSleepHours('saturday');+
  getSleepHours('sunday');


const getIdealSleepHours = ()=> {
const idealHours = 2;
  return idealHours*7;
}

const calculateSleepDebt=()=>{
 const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours===idealSleepHours){
  console.log('user got the perfect amount of sleep.');
}
 else if (actualSleepHours>idealSleepHours){
  console.log('user got more sleep than needed. because amount of hours you slept is '+ (idealSleepHours - actualSleepHours) );
} else if (actualSleepHours<idealSleepHours){
   console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed this week. Get some rest.');
} else{console.log('you are not a valid user');}


};

calculateSleepDebt()
