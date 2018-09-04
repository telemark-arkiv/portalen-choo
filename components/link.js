const html = require('choo/html')

module.exports = link => {
  return html`
    <a href="${link.url}" target="_blank" class="pa2" title="${link.description}">${link.title}</a>
  `
}
