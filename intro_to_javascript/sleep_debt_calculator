const getSleepHours = (day) => {
    day = day.toLowerCase();
    switch (day) {
      case "monday":
        return 8;
        break;
      case "tuesday":
        return 7;
        break;
      case "wednesday":
        return 6.5;
        break;
      case "thursday":
        return 5;
        break;
      case "friday":
        return 9;
        break;
      case "saturday":
        return 10;
        break;
      case "sunday":
        return 8.5;
        break;
    }
  };
  
  const getActualSleepHours = () =>
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("Wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log("You got the perfect amount of sleep this week");
    } else if (actualSleepHours > idealSleepHours) {
      console.log(
        `You got ${
          idealSleepHours - actualSleepHours
        } extra hour(s)of sleep this week, which is more than you needed.`
      );
    } else if (actualSleepHours < idealSleepHours) {
      console.log(
        `You got ${
          idealSleepHours - actualSleepHours
        } hours(s) less sleep than you needed this week. You need to get more sleep. Rest up!`
      );
    }
  };
  calculateSleepDebt();  