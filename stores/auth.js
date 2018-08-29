const queryString = require('query-string')

module.exports = store

function store (state, emitter) {
  state.accessToken = false
  state.idToken = false
  state.user = false
  state.loggedIn = false
  emitter.on('DOMContentLoaded', function () {
    emitter.on('auth:checklogin', function () {
      if (state.params.wildcard) {
        const data = queryString.parse(state.params.wildcard)
        emitter.emit('auth:signin', data)
      } else {
        console.log('No login here')
      }
    })
    emitter.on('auth:signin', function (data) {
      state.accessToken = data.access_token
      state.idToken = data.id_token
      state.loggedIn = true
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
        .catch(error => {
          emitter.emit('error', error)
        })
    })
    emitter.on('auth:signout', function () {
      state.accessToken = false
      state.idToken = false
      state.user = false
      state.loggedIn = false
      emitter.emit('roles:cleanup')
      emitter.emit('search:cleanup')
      emitter.emit('replaceState', '/')
    })
    emitter.emit('auth:checklogin')
  })
}
