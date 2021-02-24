const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDeep = 1
    let deepCount = 1

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {

        deepCount = deepCount + this.calculateDepth(arr[i])
      }
      if (deepCount > maxDeep) {
        maxDeep = deepCount
      }
      deepCount = 1
    }
    return maxDeep
  }
}