const html = require('choo/html')

module.exports = (state, emit) => {
  return html`
  <form id="searchForm" onsubmit=${onsubmit}>
    <fieldset class="cf bn ma0 pa3">
    <div class="cf">
      <label for="query" class="clip">Søk</label>
      <input id="query" name="query" type="text" required title="Søk i portalen" value="${state.searchQuery}" class="f6 f5-l input-reset ba fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns">
      <input type="submit" value="Søk" class="f6 f5-l button-reset fl pv3 tc ba bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns">
    </div>
    </fieldset>
  </form>
  `
  function onsubmit (e) {
    e.preventDefault()
    const form = e.currentTarget
    emit('search:search', form.query.value)
    emit('replaceState', '/search')
  }
}
