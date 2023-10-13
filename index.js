function batteryReducer(batteries) {
    // Your reducer logic here
    return batteries.reduce((acc, current) => acc + current, 0);
  }
  
  // Define the totalBatteries variable and use the reducer
  const batteriesArray = [10, 5, 8, 4, 4];
  const totalBatteries = batteryReducer(batteriesArray);
  
  // Mocha test suite