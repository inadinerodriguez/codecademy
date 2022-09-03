let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnersAge = 18;

if (runnersAge > 18 && registeredEarly === true) {
    raceNumber += 1000;
}

// refactored
if (runnersAge > 18 && registeredEarly) {
    raceNumber += 1000;
}



if (runnersAge > 18 && registeredEarly) {
    console.log(
      `Your run time starts at 9:30 and your race number is ${raceNumber}.`
    );
  } else if (runnersAge > 18 && registeredEarly === false) {
    console.log(
      `Your run time starts at 11:00 and your race number is ${raceNumber}.`
    );
  } else if (runnersAge < 18) {
    console.log(
      `Your run time starts at 12:30pm and your race number is ${raceNumber}.`
    );
  } else {
    console.log(`Come to the registration desk.`);
}

