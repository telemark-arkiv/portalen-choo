const html = require('choo/html')
const queryString = require('query-string')
const TITLE = 'portalen-choo - login'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  const query = queryString.parse(state.params.wildcard)
  state.query = query
  return html`
  <body>
  Login...<button onclick=${() => emit('auth:signin')}>Fortsett</button>
  </body>
  `
}
