const html = require('choo/html')
const logoutButton = require('./log-out-button')

module.exports = (state, emit) => {
  return state.loggedIn ? html`
  <header class="bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l cf">
    <nav class="f6 fw6 ttu tracked">
      <span class="white">${state.user ? state.user.displayName : ''} - ${state.user ? state.user.companyName : ''}</span>
      <a class="link dim white dib mr3" href="/" title="Forsiden">Forsiden</a>
      <a class="link dim white dib mr3" href="/search" title="Søk">Søk</a>
      ${logoutButton(state, emit)}
    </nav>
  </header>
  ` : ''
}
