const makeUnique = require('tfk-unique-array')
const links = require('../data/links.json')

module.exports = data => {
  let roles = data ? data.roles : []
  let myLinks = []

  roles = Array.isArray(roles) ? roles : roles.split('|')

  roles.forEach(item => {
    if (links.hasOwnProperty(item)) {
      myLinks = myLinks.concat(links[item])
    }
  })

  return makeUnique(myLinks)
}
