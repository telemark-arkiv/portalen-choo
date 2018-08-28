const uuid = require('uuid-random')

module.exports = store

function store (state, emitter) {
  state.clientUUID = uuid()
  state.accessToken = false
  state.idToken = false
  state.user = false
  emitter.on('DOMContentLoaded', function () {
    emitter.on('auth:signin', function () {
      const data = state.query
      state.accessToken = data.access_token
      state.idToken = data.id_token
      emitter.emit('auth:getuser')
    })
    emitter.on('auth:getuser', function () {
      const options = {
        headers: {
          Authorization: `Bearer ${state.accessToken}`
        }
      }
      window.fetch(`https://graph.microsoft.com/v1.0/me?$select=displayName,mail,companyName,department`, options)
        .then(response => response.json())
        .then(user => {
          state.user = user
          emitter.emit('roles:update')
          emitter.emit('replaceState', '/')
        })
    })
  })
}
