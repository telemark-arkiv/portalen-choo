const html = require('choo/html')

module.exports = data => {
  const item = data._source && data._source.body ? data._source.body : data._source
  return html`
    <div>
      <h1>${item.title}</h1>
      <div>
        ${item.description || item.summary}
      </div>
      <p>
        <a href="${item.url}" title="Les hele artikkelen ${item.title}" target="_blank">Les mer</a>
      </p>
    </div>
  `
}
