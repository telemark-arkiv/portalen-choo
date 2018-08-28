const html = require('choo/html')
const shortcut = require('../components/shortcut')
const newsItem = require('../components/news-item')
const config = require('../config')

var TITLE = 'portalen-choo - main'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body>
      <main class="pa3 cf">
      <div>
        <a href="https://login.microsoftonline.com/${config.MOA_TENANT_ID}/oauth2/v2.0/authorize?client_id=${config.MOA_CLIENT_ID}&response_type=id_token+token&redirect_uri=https://localhost:8080/api/login&scope=openid&response_mode=fragment&state=12345&nonce=${state.clientUUID}">Logg inn</a>
      </div>
      <div class="flex-m flex-l flex-wrap-l flex-wrap-m justify-start">
        ${state.shortcuts.map(shortcut)}
      </div>
      <div>
        ${state.content.map(newsItem)}
      </div>
      </main>
    </body>
  `
}
