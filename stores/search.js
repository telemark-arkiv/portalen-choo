module.exports = store

function store (state, emitter) {
  state.searchResults = []
  state.searchQuery = ''
  emitter.on('DOMContentLoaded', function () {
    emitter.on('search:search', function (query) {
      state.searchQuery = query
      window.fetch(`https://search.service.t-fk.no/api/search?q=${query}`)
        .then(response => response.json())
        .then(data => {
          state.searchResults = data.hits.hits
          emitter.emit('render')
        })
        .catch((error) => {
          emitter.emit('error', error)
        })
    })
    emitter.on('search:cleanup', function () {
      state.searchResults = []
    })
  })
}
