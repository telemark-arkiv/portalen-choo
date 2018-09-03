const html = require('choo/html')

module.exports = (state, emit) => {
  return state.loggedIn ? html`
  <a class="link dim white dib mr3" href="#" onclick=${() => emit('auth:signout')}>Logg av</a>
  ` : ''
}
