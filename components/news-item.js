const html = require('choo/html')
const raw = require('nanohtml/raw')

module.exports = item => {
  return html`
    <div>
      <h1>${item.title}</h1>
      <div>
        ${raw(item.summary)}
      </div>
      <p>
        <a href="${item.url}" title="Les hele artikkelen ${item.title}" target="_blank">Les mer</a>
      </p>
    </div>
  `
}
