const html = require('choo/html')

module.exports = link => {
  return html`
    <a href="${link.url}" target="_blank" class="black no-underline pa2 w-100 w-20-l w-33-m" title="${link.description}">
      <h1 class="f5 center outline pa3">${link.title}</h1>
    </a>
  `
}
