const html = require('choo/html')
const queryString = require('query-string')
const TITLE = 'portalen-choo - login'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  const query = queryString.parse(state.params.wildcard)
  console.log(query)
  emit('auth:signin', query)
  return html`
  <body>
  Login...
  </body>
  `
}
