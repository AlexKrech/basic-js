const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if (!Array.isArray(members)) {
    return false
  }

  let teamMame = []

  for (member of members) {
    if (typeof member === 'string') {
      member = member.trim()
      teamMame.push(member[0])
    }
  }

  teamMame = teamMame.join('').toUpperCase()
  teamMame = teamMame.split('')
  teamMame.sort()

  return teamMame.join('').toUpperCase()

};