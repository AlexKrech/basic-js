const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let {
    repeatTimes = 1,
      separator = '+',
      addition = '',
      additionRepeatTimes = 1,
      additionSeparator = '|'
  } = options;

  str = String(str)
  addition = String(addition)

  let mainStr = [];
  let addStr = [];

  for (let i = 0; i < repeatTimes; i++) {
    mainStr.push(str)
  }

  for (let i = 0; i < additionRepeatTimes; i++) {
    addStr.push(addition)
  }
  addStr = addStr.join(additionSeparator)

  mainStr = mainStr.map((item) => item = item + addStr)


  return mainStr.join(separator)
};