const html = require('choo/html')
const config = require('../config')
const uuid = require('uuid-random')

module.exports = loggedIn => {
  const loginUrl = `https://login.microsoftonline.com/${config.MOA_TENANT_ID}/oauth2/v2.0/authorize?client_id=${config.MOA_CLIENT_ID}&response_type=id_token+token&redirect_uri=https://localhost:8080/api/login&scope=openid&response_mode=fragment&state=12345&nonce=${uuid()}`
  return !loggedIn ? html`
  <a href="${loginUrl}" class="black no-underline">
    <div class="center ba w-33-ns pa3 mr2 br3 mt3">
      <h1>Logg inn</h1>
    </div>
  </a>
  ` : ''
}
