const html = require('choo/html')
const searchForm = require('./search-form')
const logoutButton = require('./log-out-button')

module.exports = (state, emit) => {
  return state.loggedIn ? html`
    <div class="pa3">
      <span>${state.user ? state.user.displayName : ''} - ${state.user ? state.user.companyName : ''}</span>
      <a class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr2" href="/">Forsiden</a>
      ${logoutButton(state, emit)}
      ${searchForm(state, emit)}
    </div>
  ` : ''
}
