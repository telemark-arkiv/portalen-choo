const html = require('choo/html')
const searchItem = require('../components/search-item')

var TITLE = 'portalen-choo - search'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body>
      <main class="pa3 cf">
        <h1>Søkeresultat</h1>
        <form id="login" onsubmit=${onsubmit}>
        <label for="query" class="white">
          Søk
        </label>
        <input id="query" name="query"
          type="text"
          required
          title="Søk i portalen"
        >
        <input type="submit" value="Søk">
      </form>
      <div class="flex-m flex-l flex-wrap-l flex-wrap-m justify-start">
        ${state.searchResults.map(searchItem)}
      </div>
      </main>
    </body>
  `

  function onsubmit (e) {
    e.preventDefault()
    const form = e.currentTarget
    emit('search:search', form.query.value)
  }
}
