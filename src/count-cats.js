const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

  let count = 0;

  for (submatrix of matrix) {
    for (elem of submatrix) {
      if (elem === '^^') {
        count++
      }
    }
  }
  return count
};