const html = require('choo/html')
const logoutButton = require('./log-out-button')

module.exports = state => {
  return html`
    <div>
      <a class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr2" href="/">Forsiden</a>
      ${logoutButton(state.loggedIn)}
    </div>
  `
}
