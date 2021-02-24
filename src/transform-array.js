const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  let sequence = arr.slice();

  for (let i = 0; i < sequence.length; i++) {

    if (sequence[i] == '--discard-next' && i < sequence.length - 1) {
      sequence.splice(i, 2, undefined)
    } else if (sequence[i] == '--discard-next') {
      sequence.splice(i, 1)
    }

    if (sequence[i] == '--discard-prev' && i > 0) {
      sequence.splice(i - 1, 2, undefined)
    } else if (sequence[i] == '--discard-prev') {
      sequence.splice(i, 1)
    }

    if (sequence[i] == '--double-next' && i < sequence.length - 1) {
      sequence.splice(i, 1, sequence[i + 1])
    } else if (sequence[i] == '--double-next') {
      sequence.splice(i, 1)
    }

    if (sequence[i] == '--double-prev' && i > 0) {
      sequence.splice(i, 1, sequence[i - 1])
    } else if (sequence[i] == '--double-prev') {
      sequence.splice(i, 1)
    }

  }

  return sequence.filter((item) => item !== undefined)

};