const filterRoles = require('../lib/filter-roles')
const filterShortcuts = require('../lib/filter-shortcuts')
const filterLinks = require('../lib/filter-links')

module.exports = store

function store (state, emitter) {
  state.roles = []
  state.shortcuts = []
  state.links = []
  state.content = []
  state.myIp = false

  emitter.on('DOMContentLoaded', function () {
    emitter.on('roles:update', function () {
      const roles = filterRoles({ company: state.user.companyName })
      state.roles = roles
      emitter.emit('shortcuts:update')
      emitter.emit('links:update')
      emitter.emit('content:update')
    })
    emitter.on('shortcuts:update', function () {
      const shortcuts = filterShortcuts({ roles: state.roles, myIp: state.myIp })
      state.shortcuts = shortcuts
      emitter.emit('render')
    })
    emitter.on('links:update', function () {
      const links = filterLinks({ roles: state.roles })
      state.links = links
      emitter.emit('render')
    })
    emitter.on('content:update', function () {
      window.fetch(`https://content.portalen.win/api/content?roles=${state.roles.join('|')}`)
        .then(response => response.json())
        .then(content => {
          state.content = content.news
          emitter.emit('render')
        })
        .catch((error) => {
          emitter.emit('error', error)
        })
    })
    emitter.on('ip:update', function () {
      window.fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
          state.myIp = data.ip
        })
        .catch(error => {
          emitter.emit('error', error)
        })
    })
    emitter.on('roles:cleanup', function () {
      state.roles = []
      state.shortcuts = []
      state.links = []
      state.content = []
      state.myIp = false
    })
    emitter.on('error', function (error) {
      console.error(error)
    })
    emitter.emit('ip:update')
  })
}
