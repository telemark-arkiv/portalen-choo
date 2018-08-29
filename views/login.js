const html = require('choo/html')
const TITLE = 'portalen-choo - login'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
  <body>
  Login...
  </body>
  `
}
