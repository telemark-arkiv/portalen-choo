const mapRoles = require('./map-roles')
const generateId = require('./generate-id')

module.exports = data => {
  const company = data.company
  const department = data.department
  let roles = data.roles || []

  roles = Array.isArray(roles) ? roles : roles.split('|')

  if (company) {
    roles.push(generateId(company))
  }

  if (department) {
    roles.push(generateId(department))
  }

  return mapRoles(roles)
}
