const html = require('choo/html')

module.exports = item => {
  return html`
    <div>
      <h1>${item.title}</h1>
      <div>
        ${item.summary}
      </div>
      <p>
        <a href="${item.url}" title="Les hele artikkelen ${item.title}" target="_blank">Les mer</a>
      </p>
    </div>
  `
}
