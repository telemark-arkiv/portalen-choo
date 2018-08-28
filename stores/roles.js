const filterRoles = require('../lib/filter-roles')
const filterShortcuts = require('../lib/filter-shortcuts')

module.exports = store

function store (state, emitter) {
  state.roles = []
  state.shortcuts = []
  state.content = []

  emitter.on('DOMContentLoaded', function () {
    emitter.on('roles:update', function () {
      const roles = filterRoles({company: state.user.companyName})
      state.roles = roles
      emitter.emit('shortcuts:update')
      emitter.emit('content:update')
    })
    emitter.on('shortcuts:update', function () {
      const shortcuts = filterShortcuts({roles: state.roles})
      state.shortcuts = shortcuts
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
    emitter.on('error', function (error) {
      console.error(error)
    })
  })
}
