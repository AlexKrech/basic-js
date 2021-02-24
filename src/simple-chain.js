const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],


  getLength() {
    return this.chain.length
  },
  addLink(value) {
    value = String(value)
    this.chain.push(value)
    return this
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position <= 0 || position > this.chain.length) {
      this.chain = []
      throw new Error()
    }
    this.chain.map((item, index) => {
      if (index === position - 1) {
        this.chain.splice(index, 1)
      }
    })
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    this.chain = this.chain.map(function (item) {
      if (item == '') {
        return item = '( )'
      } else {
        return item = `( ${item} )`
      }
    })

    let result = this.chain.join('~~')
    this.chain = []

    return result
  },
};

module.exports = chainMaker;