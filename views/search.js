const html = require('choo/html')
const menuTop = require('../components/menu-top')
const searchItem = require('../components/search-item')

var TITLE = 'portalen - søkeresultat'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body>
      ${menuTop(state, emit)}
      <main class="pa3 cf">
        <h1>Søkeresultat</h1>
        ${state.searchResults.map(searchItem)}
      </main>
    </body>
  `
}
