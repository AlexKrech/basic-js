const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  let objectToString = Object.prototype.toString;

  if (date === undefined) {
    return 'Unable to determine the time of year!'
  }
  if (objectToString.call(date) !== objectToString.call(new Date())) {
    throw Error()
  }
  // if (Object.keys(date).length !== Object.keys(new Date(1522, 11, 16, 0, 47, 3, 289)).length) {
  //   throw Error()
  // }

  let getMonth = date.getMonth()

  getMonth = getMonth + 1

  if (getMonth === 12 || getMonth === 1 || getMonth === 2) {
    return 'winter'
  }
  if (getMonth > 2 && getMonth < 6) {
    return 'spring'
  }
  if (getMonth > 5 && getMonth < 9) {
    return 'summer'
  }
  if (getMonth > 8 && getMonth < 12) {
    return 'autumn'
  }
};;