const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {

  if (sampleActivity == undefined || !(typeof sampleActivity == 'string') || !isFinite(parseInt(sampleActivity))) {
    return false
  }

  if (sampleActivity > MODERN_ACTIVITY || sampleActivity <= 0) {
    return false
  }

  let k = 0.693 / HALF_LIFE_PERIOD

  Math.log(MODERN_ACTIVITY / sampleActivity)

  let age = (Math.log(MODERN_ACTIVITY / sampleActivity)) / k

  return Math.ceil(age)
};