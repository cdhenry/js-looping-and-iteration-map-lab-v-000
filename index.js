// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function (driver) { return driver.toLowerCase(); });
}

function nameToAttributes(drivers){
  debugger;
  return drivers.map(function (driver) { return Object.assign({}, {firstName: driver.split(""), lastName: driver.split("")[1]}); });
}

function attributesToPhrase(){

}
