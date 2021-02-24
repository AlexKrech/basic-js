const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direct) {
    this.direct = direct;
  }

  encrypt(message, key) {

    message = message.toUpperCase()

    message = message.split('')

    let messageClone = message.slice()
    let keyRepeat = Math.ceil(message.length / key.length)

    key = key.repeat(keyRepeat).toUpperCase()

    let keyString = [];

    for (let i = 0; i < messageClone.length; i++) {
      if (messageClone[i] !== ' ') {
        keyString.push(key[i])
      } else {
        messageClone.splice(i, 1)
        i--
        keyString.push(' ')
      }
    }

    for (let i = 0; i < message.length; i++) {
      if (message[i].codePointAt() >= 65 && message[i].codePointAt() <= 90) {
        let codePoint = message[i].codePointAt() + (keyString[i].codePointAt() - 65)
        if (codePoint > 90) {
          codePoint = 64 + codePoint - 90
        }
        message[i] = String.fromCodePoint(codePoint)
      }
    }

    if (this.direct === false) {
      return message.reverse().join('')
    } else {
      return message.join('')
    }
  }

  decrypt(encryptedMessage, key) {

    encryptedMessage = encryptedMessage.split('')

    let encryptedMessageClone = encryptedMessage.slice()
    let keyRepeat = Math.ceil(encryptedMessage.length / key.length)

    key = key.repeat(keyRepeat).toUpperCase()

    let keyString = [];

    for (let i = 0; i < encryptedMessageClone.length; i++) {
      if (encryptedMessageClone[i] !== ' ') {
        keyString.push(key[i])
      } else {
        encryptedMessageClone.splice(i, 1)
        i--
        keyString.push(' ')
      }
    }

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i].codePointAt() >= 65 && encryptedMessage[i].codePointAt() <= 90) {
        let codePoint = encryptedMessage[i].codePointAt() - (keyString[i].codePointAt() - 65)
        if (codePoint < 65) {
          codePoint = 91 - (65 - codePoint)
        }
        encryptedMessage[i] = String.fromCodePoint(codePoint)
      }
    }

    if (this.direct === false) {
      return encryptedMessage.reverse().join('')
    } else {
      return encryptedMessage.join('')
    }
  }
};

module.exports = VigenereCipheringMachine;