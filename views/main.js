const html = require('choo/html')
const shortcut = require('../components/shortcut')
const newsItem = require('../components/news-item')
const loginButton = require('../components/log-in-button')
const menuTop = require('../components/menu-top')

var TITLE = 'portalen-choo - main'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body>
      ${menuTop(state, emit)}
      <main class="pa3 cf">
      ${loginButton(state.loggedIn)}
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
