const html = require('choo/html')
const shortcut = require('../components/shortcut')
const searchForm = require('../components/search-form')
const newsItem = require('../components/news-item')
const link = require('../components/link')
const loginButton = require('../components/log-in-button')
const menuTop = require('../components/menu-top')

var TITLE = 'portalen-choo - main'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="sans-serif">
      ${menuTop(state, emit)}
      <main class="pa3 cf">
      ${searchForm(state, emit)}
      ${loginButton(state.loggedIn)}
      <div class="flex-m flex-l flex-wrap-l flex-wrap-m justify-start">
        ${state.shortcuts.map(shortcut)}
      </div>
      <div class="flex-m flex-l flex-wrap-l flex-wrap-m justify-start">
        ${state.links.map(link)}
      </div>
      <div>
        ${state.content.map(newsItem)}
      </div>
      </main>
    </body>
  `
}
