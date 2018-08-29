const html = require('choo/html')

module.exports = loggedIn => {
  return loggedIn ? html`
  <a class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr2" href="">Logg av</a>
  ` : ''
}
